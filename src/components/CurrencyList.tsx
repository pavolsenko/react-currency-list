import * as React from 'react';
import {FormattedMessage} from 'react-intl';

import {
    Alert,
    CircularProgress,
} from '@mui/material';

import {ICurrency} from '../interfaces/currency';
import {CurrencyListItem} from './CurrencyListItem';

interface ICurrencyListProps {
    locale: string;
    currencies: ICurrency[];
    isError: boolean;
    isLoading: boolean;
}

export const CurrencyList: React.FC<ICurrencyListProps> = (props: ICurrencyListProps) => {
    if (props.isError) {
        return (
            <Alert severity='error'>
                <FormattedMessage id={'Sorry, something went wrong'}/>
            </Alert>
        );
    }

    if (props.isLoading) {
        return (
            <CircularProgress />
        );
    }

    if (!props.currencies) {
        return (
            <Alert severity='info'>
                <FormattedMessage id={'No results'}/>
            </Alert>
        );
    }

    return (
        <>
            {props.currencies.map((currency: ICurrency): React.ReactNode => {
                if (!currency.exchangeRate) {
                    return null;
                }

                return (
                    <CurrencyListItem
                        currency={currency}
                        key={currency.currency}
                    />
                );
            })}
        </>
    );
};
