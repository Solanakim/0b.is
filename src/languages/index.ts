import { Language } from '../types';

type LanguagesType = {
  [key: string]: {
    [key in Language]: string
  }
};

export const languages: LanguagesType = {
  'Binary': {
    'enUS': '2 (binary)',
    'fiFI': '2 (binääri)',
  },
  'Change language': {
    'enUS': 'Change language',
    'fiFI': 'Vaihda kieli',
  },
  'Clear': {
    'enUS': 'Clear',
    'fiFI': 'Tyhjennä',
  },
  'Contributing': {
    'enUS': 'Contributing',
    'fiFI': 'Osallistuminen',
  },
  'Copy': {
    'enUS': 'Copy',
    'fiFI': 'Kopioi',
  },
  'Decimal': {
    'enUS': '10 (decimal)',
    'fiFI': '10 (desimaali)',
  },
  'Documentation': {
    'enUS': 'Documentation',
    'fiFI': 'Dokumentaatio',
  },
  'English': {
    'enUS': 'English',
    'fiFI': 'englanti',
  },
  'Finnish': {
    'enUS': 'Finnish',
    'fiFI': 'suomi',
  },
  'From base': {
    'enUS': 'From base',
    'fiFI': 'Kantaluvusta',
  },
  'Hexadecimal': {
    'enUS': '16 (hexadecimal)',
    'fiFI': '16 (heksadesimaali)',
  },
  'Input': {
    'enUS': 'Input',
    'fiFI': 'Syöte',
  },
  'Number copied to clipboard!': {
    'enUS': 'Number copied to clipboard!',
    'fiFI': 'Numero kopioitu leikepöydälle!'
  },
  'Not a valid number!': {
    'enUS': 'Not a valid number!',
    'fiFI': 'Numero ei ole kelvollinen!'
  },
  'Octal': {
    'enUS': '8 (octal)',
    'fiFI': '8 (oktaali)',
  },
  'Output': {
    'enUS': 'Output',
    'fiFI': 'Tuloste',
  },
  'Read more': {
    'enUS': 'Read more',
    'fiFI': 'Lue lisää',
  },
  'Source code': {
    'enUS': 'Source code',
    'fiFI': 'Lähdekoodi',
  },
  'To base': {
    'enUS': 'To base',
    'fiFI': 'Kantalukuun',
  },
  'Use light theme': {
    'enUS': 'Use light theme',
    'fiFI': 'Käytä vaaleaa teemaa',
  },
  'Use dark theme': {
    'enUS': 'Use dark theme',
    'fiFI': 'Käytä tummaa teemaa',
  },
  'User manual': {
    'enUS': 'User manual',
    'fiFI': 'Käyttöohje',
  },
  'Version': {
    'enUS': 'Version',
    'fiFI': 'Versio',
  },
};
