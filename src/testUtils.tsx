import * as React from "react";
import {IntlProvider} from "react-intl";
import {BrowserRouter} from "react-router-dom";

import {createTheme, ThemeProvider} from "@mui/material";

import {useLocale} from "./hooks/useLocale";

export const WrapperTestComponent: React.FC<React.PropsWithChildren<any>> = (props: React.PropsWithChildren<any>) => {
    const {
        locale,
        defaultLocale,
        getMessages,
    } = useLocale();

    return (
        <IntlProvider
            messages={getMessages()}
            locale={locale}
            defaultLocale={defaultLocale}
        >
            <ThemeProvider theme={createTheme()}>
                <BrowserRouter>
                    {props.children}
                </BrowserRouter>
            </ThemeProvider>
        </IntlProvider>
    );
}
