import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { reactI18nextModule } from 'react-i18next';
import locales from '../locales';

i18n
    .use(LanguageDetector)
    .use(reactI18nextModule)
    .init({
        fallbackLng: 'en',
        ns: ['main'],
        defaultNS: 'main',
        resources: locales,
        debug: process.env.NODE_ENV === 'development',
        react: {
            wait: true,
        },
    });

export default i18n;
