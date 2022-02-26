import * as React from 'react';

import {
    Box,
    Card,
    CardContent, CardMedia,
    Typography,
} from '@mui/material';

import {ICurrency} from '../interfaces/currency';
import {getAllISOByCurrencyOrSymbol} from 'iso-country-currency';

interface ICurrencyListItemProps {
    currency: ICurrency;
}

export const CurrencyListItem: React.FC<ICurrencyListItemProps> = (props: ICurrencyListItemProps) => {
    let countryCodes: string[] = [];
    try {
        countryCodes = getAllISOByCurrencyOrSymbol('currency', props.currency.currency);
    } catch(error) {
    }

    const renderCountryFlag = (): React.ReactNode => {
        return countryCodes.map((countryCode: string) => (
            <img
                src={process.env.PUBLIC_URL + '/flags/' + countryCode.toLowerCase() + '.png'}
                key={countryCode}
                alt={countryCode}
            />
        ));
    };

    return (
        <Card sx={{display: 'flex', justifyContent: 'space-between', margin: 5}}>
            <Box sx={{display: 'flex'}}>
                <CardMedia sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', margin: 2, backgroundColor: 'grey'}}>
                    <Typography variant='h2'>
                        {props.currency.currency}
                    </Typography>
                </CardMedia>

                <CardContent>
                    <Box>
                        {renderCountryFlag()}
                    </Box>

                    <Box>
                        <Typography variant='h5'>
                            {props.currency.nameI18N}
                        </Typography>
                    </Box>
                </CardContent>
            </Box>

            <CardContent sx={{display: 'flex'}}>
                <Box>
                    {props.currency.exchangeRate.buy}
                </Box>

                <Box>
                    {props.currency.exchangeRate.middle}
                </Box>

                <Box>
                    {props.currency.exchangeRate.sell}
                </Box>
            </CardContent>
        </Card>
    );
};
