import i18n from '../../i18n';

const actions = {
  setLanguage(store, payload) {
    i18n.locale = payload;
  },
};

const moduleLanguages = {
  namespaced: true,
  actions,
};

export default moduleLanguages;
