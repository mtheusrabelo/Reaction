import i18n from 'i18next';
import { reactI18nextModule } from 'react-i18next';
import locales from '../locales';

i18n
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
