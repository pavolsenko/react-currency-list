import * as React from 'react';
import {TopBar} from './TopBar';
import {CurrencyList} from './CurrencyList';

import {useCurrencies} from '../hooks/useCurrencies';
import {ILocale} from '../config/localeConfig';

interface IMainProps {
    locale: string;
    availableLocales: ILocale[];
    setLocale: (locale: string) => void;
}

export const Main: React.FC<IMainProps> = (props: IMainProps) => {
    const {
        currencies,
        isError,
        isLoading,
        searchInputValue,
        onSearchInputValueChange,
    } = useCurrencies(props.locale);

    return (
        <>
            <TopBar
                locale={props.locale}
                availableLocales={props.availableLocales}
                onLocaleChange={props.setLocale}
                searchInputValue={searchInputValue}
                onSearchInputValueChange={onSearchInputValueChange}
            />
            <CurrencyList
                locale={props.locale}
                currencies={currencies}
                isError={isError}
                isLoading={isLoading}
            />
        </>
    );
};
