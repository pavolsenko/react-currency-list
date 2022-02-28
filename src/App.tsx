import React from "react";
import {IntlProvider} from "react-intl";
import {BrowserRouter} from "react-router-dom";

import {CssBaseline, ThemeProvider} from "@mui/material";

import "typeface-roboto";

import {useLocale} from "./hooks/useLocale";
import {themeConfig} from "./config/themeConfig";
import {Main} from "./components/Main";

export const App: React.FC = () => {
    const {
        locale,
        availableLocales,
        defaultLocale,
        setLocale,
        getMessages,
    } = useLocale();

    return (
        <IntlProvider
            messages={getMessages()}
            locale={locale}
            defaultLocale={defaultLocale}
        >
            <ThemeProvider theme={themeConfig}>
                <BrowserRouter>
                    <CssBaseline />
                    <Main
                        locale={locale}
                        availableLocales={availableLocales}
                        setLocale={setLocale}
                    />
                </BrowserRouter>
            </ThemeProvider>
        </IntlProvider>
    );
};
