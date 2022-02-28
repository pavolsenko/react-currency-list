import * as React from "react";
import { Box, CardContent, styled, Typography } from "@mui/material";

const ExchangeRateValueWrapper = styled(CardContent)(({ theme }) => ({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginRight: theme.spacing(2),
    width: 120,
}));

const BaseCurrency = styled(Box)(({ theme }) => ({
    fontSize: "0.75rem",
    textAlign: "center",
    color: theme.palette.grey["500"],
}));

const Value = styled(Box)(() => ({
    textAlign: "center",
}));

interface IExchangeRateProps {
    value: number;
    currency: string;
    precision: number;
    baseCurrency: string;
}

export const ExchangeRateValue: React.FC<IExchangeRateProps> = (
    props: IExchangeRateProps,
) => {
    return (
        <ExchangeRateValueWrapper>
            <Box>
                <Typography
                    variant={"h5"}
                    component={"div"}
                >
                    <BaseCurrency>
                        1&nbsp;{props.baseCurrency}&nbsp;/&nbsp;{props.currency}
                    </BaseCurrency>
                    <Value>{props.value.toFixed(props.precision)}</Value>
                </Typography>
            </Box>
        </ExchangeRateValueWrapper>
    );
};
