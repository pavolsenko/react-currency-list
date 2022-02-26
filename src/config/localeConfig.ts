import * as en from '../i18n/en.json';

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
}];

export const messages: Record<string, Record<string, string>> = {
    en,
}
