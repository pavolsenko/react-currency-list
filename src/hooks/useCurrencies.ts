import * as React from "react";
import {useSearchParams} from "react-router-dom";
import axios from "axios";

import {ICurrency} from "../interfaces/currency";

export const useCurrencies = (locale: string) => {
    const [searchParams, setSearchParams] = useSearchParams();

    const [baseCurrency, setBaseCurrency] = React.useState<string>("");
    const [currencies, setCurrencies] = React.useState<ICurrency[]>([]);
    const [isError, setIsError] = React.useState<boolean>(false);
    const [isLoading, setIsLoading] = React.useState<boolean>(false);
    const [searchInputValue, setSearchInputValue] = React.useState<string>(searchParams.get("search") || "");

    React.useEffect(() => {
        const fetchData = async () => {
            const endpoint = process.env.REACT_APP_CURRENCIES_ENDPOINT;

            if (!endpoint) {
                setIsError(true);
                return;
            }

            setIsLoading(true);

            let response;
            try {
                response = await axios.get(endpoint, {params: {locale}});
            } catch (error: unknown) {
                setIsLoading(false);
                setIsError(true);
                return;
            }

            if (!response?.data || response.status !== 200) {
                setIsLoading(false);
                setIsError(true);
                return;
            }

            let currencies = response.data.fx;
            setBaseCurrency(response.data.baseCurrency);

            currencies = currencies.filter((currency: ICurrency) => {
                return currency.exchangeRate;
            });
            currencies = currencies.sort((a: ICurrency, b: ICurrency) =>
                a.currency > b.currency ? 1 : -1,
            );

            setCurrencies(currencies);
            setIsLoading(false);
        };

        fetchData();
    }, [locale, baseCurrency]);

    const onSearchInputValueChange = (
        event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
    ): void => {
        const value = event.target.value;

        if (!value) {
            setSearchParams({});
        } else {
            setSearchParams({search: value});
        }

        setSearchInputValue(value);
    };

    const filterCurrencies = () => {
        if (!searchInputValue) {
            return currencies;
        }

        return currencies.filter((currency: ICurrency): boolean | undefined => {
            const filterByCurrencyCode = currency.currency?.toLowerCase().includes(searchInputValue.toLowerCase());
            const filterByCurrencyName = currency.nameI18N?.toLowerCase().includes(searchInputValue.toLowerCase());

            return filterByCurrencyCode || filterByCurrencyName;
        });
    };

    return {
        currencies: filterCurrencies(),
        baseCurrency,
        isError,
        isLoading,
        searchInputValue,
        onSearchInputValueChange,
    };
};
