import * as React from "react";

import {Box, Button, Menu, MenuItem, Typography} from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

import {ILocale} from "../config/localeConfig";

interface ILanguageSelectorProps {
    availableLocales: ILocale[];
    locale: string;
    onLocaleChange: (locale: string) => void;
}

export const LanguageSelector: React.FC<ILanguageSelectorProps> = (
    props: ILanguageSelectorProps,
) => {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

    const onClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const onClose = () => {
        setAnchorEl(null);
    };

    const onLocaleChange = (locale: ILocale) => {
        onClose();
        props.onLocaleChange(locale.value);
    };

    return (
        <Box sx={{flexGrow: 0}}>
            <Button onClick={onClick}
color={"inherit"}>
                {props.locale.toUpperCase()}
                <ArrowDropDownIcon />
            </Button>

            <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={onClose}
                anchorOrigin={{
                    vertical: "top",
                    horizontal: "left",
                }}
                transformOrigin={{
                    vertical: "top",
                    horizontal: "left",
                }}
            >
                {props.availableLocales.map((locale: ILocale) => (
                    <MenuItem
                        key={locale.value}
                        onClick={() => onLocaleChange(locale)}
                    >
                        <Typography textAlign="center">
                            {locale.title}
                        </Typography>
                    </MenuItem>
                ))}
            </Menu>
        </Box>
    );
};
