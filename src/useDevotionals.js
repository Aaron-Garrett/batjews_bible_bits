import { useEffect, useState } from 'react';
import mammoth from 'mammoth';

const devotionalFiles = require.context('./devotionals', false, /\.docx$/);

const MEDITATION_LABEL = /<strong>\s*(?:<br\s*\/?>\s*)*Meditation:\s*<\/strong>\s*/i;
const APPLICATION_LABEL = /<strong>\s*(?:<br\s*\/?>\s*)*Application:\s*<\/strong>\s*/i;

function escapeRegExp(text) {
  return text.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function cleanSection(html) {
  return html
    .replace(/<p>\s*$/i, '')
    .replace(/^(?:<em>\s*<\/em>\s*)+/i, '')
    .trim();
}

function splitIntoSections(html, dateLabel) {
  const leadingDate = new RegExp(
    `^<p>\\s*(?:<strong>\\s*)?${escapeRegExp(dateLabel)}\\s*(?:</strong>\\s*)?</p>`,
    'i'
  );
  const withoutDate = html.replace(leadingDate, '');

  const [beforeMeditation, afterMeditationLabel = ''] = withoutDate.split(MEDITATION_LABEL);
  const [meditation, application = ''] = afterMeditationLabel.split(APPLICATION_LABEL);

  return {
    Scripture: cleanSection(beforeMeditation),
    Meditation: cleanSection(meditation),
    Application: cleanSection(application),
  };
}

export default function useDevotionals() {
  const [devotionals, setDevotionals] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;

    async function loadAll() {
      const entries = await Promise.all(
        devotionalFiles.keys().map(async (key) => {
          const dateLabel = key.replace('./', '').replace(/\.docx$/, '');
          const url = devotionalFiles(key);
          const response = await fetch(url);
          const arrayBuffer = await response.arrayBuffer();
          const { value: html } = await mammoth.convertToHtml({ arrayBuffer });
          return {
            key,
            date: new Date(dateLabel),
            Date: dateLabel,
            ...splitIntoSections(html, dateLabel),
          };
        })
      );

      entries.sort((a, b) => b.date - a.date);

      if (!cancelled) {
        setDevotionals(entries);
        setLoading(false);
      }
    }

    loadAll();

    return () => {
      cancelled = true;
    };
  }, []);

  return { devotionals, loading };
}
