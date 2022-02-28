export interface ICurrencyExchangeRate {
    buy: number;
    middle: number;
    sell: number;
    indicator: number;
    lastModified: Date;
}

export interface ICurrencyBanknoteRate {
    buy: number;
    middle: number;
    sell: number;
    indicator: number;
    lastModified: Date;
}

export interface ICurrency {
    currency: string;
    precision?: number;
    nameI18N?: string;
    exchangeRate: ICurrencyExchangeRate;
    banknoteRate?: ICurrencyBanknoteRate;
    flags?: string[];
    denominations?: number[];
}
