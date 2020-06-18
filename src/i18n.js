import Vue from 'vue';
import VueI18n from 'vue-i18n';

import config from './config';

import enLang from './lang/en.json';
import viLang from './lang/vi.json';

Vue.use(VueI18n);

const messages = {
  en: enLang,
  vi: viLang,
};

const i18n = new VueI18n({
  locale: config.common.lang,
  messages,
  fallbackLocale: 'en',
});

export default i18n;
