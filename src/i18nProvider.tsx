import polyglotI18nProvider from 'ra-i18n-polyglot';
import englishMessages from './i18n/en';
import spanishMessages from "@blackbox-vision/ra-language-spanish";

const messages = {
    fr: () => import('./i18n/fr').then(messages => messages.default),
    sp: () => import('./i18n/sp').then(messages => messages.default),
};
export default polyglotI18nProvider(
    locale => {
        if (locale === 'fr') {
            return messages[locale]();
            
        if (locale === 'sp') {
            return messages[locale](); 
        }
        // Always fallback on english
        return englishMessages;
    },
    'en',
    [
        { locale: 'en', name: 'English' },
        { locale: 'fr', name: 'Français' },
        { locale: 'sp', name: 'Español' },
    ]
);