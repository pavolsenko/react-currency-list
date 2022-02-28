import * as React from "react";

import {TopBar} from "./TopBar";
import {CurrencyList} from "./CurrencyList";
import {ILocale} from "../config/localeConfig";

interface IMainProps {
    locale: string;
    availableLocales: ILocale[];
    setLocale: (locale: string) => void;
}

export const Main: React.FC<IMainProps> = (props: IMainProps) => {
    return (
        <>
            <TopBar
                locale={props.locale}
                availableLocales={props.availableLocales}
                onLocaleChange={props.setLocale}
            />
            <CurrencyList locale={props.locale} />
        </>
    );
};
