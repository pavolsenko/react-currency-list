import * as en from '../i18n/en.json';
import * as hu from '../i18n/hu.json';
import * as sk from '../i18n/sk.json';

export interface ILocale {
    title: string;
    value: string;
}

export const defaultLocale: string = process.env.REACT_APP_DEFAULT_LOCALE || 'en';
export const availableLocales: ILocale[] = [
    {
        title: 'English',
        value: 'en',
    }, {
        title: 'Slovensky',
        value: 'sk',
    }, {
        title: 'Magyar',
        value: 'hu',
}];

export const messages: Record<string, Record<string, string>> = {
    en,
    hu,
    sk,
}
