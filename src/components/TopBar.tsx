import * as React from "react";
import {FormattedMessage} from "react-intl";

import {
    AppBar,
    Box,
    Slide,
    Typography,
    Toolbar,
    useScrollTrigger,
} from "@mui/material";

import {ILocale} from "../config/localeConfig";
import {LanguageSelector} from "./LanguageSelector";

interface ITopBarProps {
    locale: string;
    availableLocales: ILocale[];
    onLocaleChange: (locale: string) => void;
}

export const TopBar: React.FC<ITopBarProps> = (props: ITopBarProps) => {
    const trigger = useScrollTrigger();

    return (
        <Slide
            appear={false}
            direction="down"
            in={!trigger}
        >
            <AppBar elevation={0}>
                <Toolbar>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                    >
                        <FormattedMessage id={"George FE Test"} />
                    </Typography>

                    <Box sx={{flexGrow: 1}} />

                    <Box>
                        <LanguageSelector
                            availableLocales={props.availableLocales}
                            locale={props.locale}
                            onLocaleChange={props.onLocaleChange}
                        />
                    </Box>
                </Toolbar>
            </AppBar>
        </Slide>
    );
};
