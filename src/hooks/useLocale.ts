import * as React from "react";
import {MessageFormatElement} from "@formatjs/icu-messageformat-parser";

import {
    availableLocales,
    defaultLocale,
    messages,
} from "../config/localeConfig";

export const useLocale = () => {
    const [locale, setLocale] = React.useState<string>(defaultLocale);

    const getMessages = (): Record<string, string> | Record<string, MessageFormatElement[]> => {
        return messages[locale];
    };

    return {
        locale,
        availableLocales,
        defaultLocale,
        setLocale,
        getMessages,
    };
};
