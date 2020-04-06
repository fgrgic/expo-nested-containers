import i18n from 'i18n-js';
import en from '../assets/lang/en';
import hr from '../assets/lang/hr';

i18n.translations = {
  en,
  hr,
};

i18n.locale = 'hr';

export default i18n;

export function setLocale(lang) {
  i18n.locale = lang;
}
