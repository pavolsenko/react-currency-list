import * as React from "react";
import {FormattedMessage} from "react-intl";

import {Alert, Container, styled} from "@mui/material";

import {ICurrency} from "../interfaces/currency";
import {CurrencyListItem} from "./CurrencyListItem";
import {SearchBar} from "./SearchBar";
import {useCurrencies} from "../hooks/useCurrencies";
import {Loading} from "./Loading";

interface ICurrencyListProps {
    locale: string;
}

const AlertWrapper = styled(Alert)(({theme}) => ({
    marginTop: theme.spacing(2),
}));

export const CurrencyList: React.FC<ICurrencyListProps> = (
    props: ICurrencyListProps,
) => {
    const {
        currencies,
        baseCurrency,
        isError,
        isLoading,
        searchInputValue,
        onSearchInputValueChange,
    } = useCurrencies(props.locale);

    const renderInfo = (): React.ReactNode => {
        if (isError) {
            return (
                <AlertWrapper severity="error">
                    <FormattedMessage id={"Sorry, something went wrong"} />
                </AlertWrapper>
            );
        }

        if (isLoading) {
            return <Loading />;
        }

        if (!currencies || currencies.length === 0) {
            return (
                <AlertWrapper severity="warning">
                    <FormattedMessage id={"No results"} />
                </AlertWrapper>
            );
        }
    };

    return (
        <>
            <SearchBar
                searchInputValue={searchInputValue}
                onSearchInputValueChange={onSearchInputValueChange}
            />

            <Container maxWidth={false}>
                {currencies.map(
                    (currency: ICurrency): React.ReactNode => (
                        <CurrencyListItem
                            currency={currency}
                            baseCurrency={baseCurrency}
                            key={currency.currency}
                        />
                    ),
                )}
                {renderInfo()}
            </Container>
        </>
    );
};
