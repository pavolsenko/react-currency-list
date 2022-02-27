import * as React from 'react';
import {
    getAllCountriesByCurrencyOrSymbol,
    getAllISOByCurrencyOrSymbol,
} from 'iso-country-currency';

import {
    Box,
    Card,
    CardContent,
    styled,
} from '@mui/material';

import {ICurrency} from '../interfaces/currency';
import {ExchangeRateValue} from './ExchangeRateValue';
import {CountryFlags} from './CountryFlags';

const CardWrapper = styled(Card)(({theme}) => ({
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
}));

const CurrencySymbol = styled(CardContent)(({theme}) => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.common.white,
    width: 100,
    fontSize: '1.8rem',

    [theme.breakpoints.up('md')]: {
        fontSize: '2.8rem',
        width: 150,
    },
}));

const CurrencyName = styled(Box)(({theme}) => ({
    fontSize: '1.5rem',

    [theme.breakpoints.up('md')]: {
        fontSize: '2.1rem',
    },
}));

interface ICurrencyListItemProps {
    currency: ICurrency;
    baseCurrency: string;
}

export const CurrencyListItem: React.FC<ICurrencyListItemProps> = (props: ICurrencyListItemProps) => {
    const [countryCodes, setCountryCodes] = React.useState<string[]>([]);
    const [countries, setCountries] = React.useState<string[]>([]);

    React.useEffect(() => {
        try {
            setCountryCodes(getAllISOByCurrencyOrSymbol('currency', props.currency.currency));
            setCountries(getAllCountriesByCurrencyOrSymbol('currency', props.currency.currency));
        } catch(error) {
        }
    }, [props.currency.currency]);

    if (!countryCodes || countryCodes.length === 0) {
        return null;
    }

    return (
        <CardWrapper>
            <Box sx={{display: 'flex'}}>
                <CurrencySymbol>
                    {props.currency.currency}
                </CurrencySymbol>

                <CardContent>
                    <CountryFlags
                        countryCodes={countryCodes}
                        countries={countries}
                    />

                    <CurrencyName>
                        {props.currency.nameI18N || props.currency.currency}
                    </CurrencyName>
                </CardContent>
            </Box>

            <ExchangeRateValue
                value={props.currency.exchangeRate.middle}
                currency={props.currency.currency}
                precision={props.currency.precision}
                baseCurrency={props.baseCurrency}
            />
        </CardWrapper>
    );
};
