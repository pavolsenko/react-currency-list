import * as React from 'react';
import { FormattedMessage, useIntl } from 'react-intl';

import {
    AppBar,
    Box,
    InputBase,
    Typography,
    Toolbar,
} from '@mui/material';
import { styled, alpha } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import {ILocale} from '../config/localeConfig';
import {LanguageSelector} from './LanguageSelector';

const Search = styled('div')(({theme}) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',

    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
}));

const SearchIconWrapper = styled('div')(({theme}) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
    },
}));

interface ITopBarProps {
    locale: string;
    availableLocales: ILocale[];
    onLocaleChange: (locale: string) => void;
    searchInputValue: string;
    onSearchInputValueChange: (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => void;
}

export const TopBar: React.FC<ITopBarProps> = (props: ITopBarProps) => {
    const intl = useIntl();

    return (
        <Box sx={{flexGrow: 1}}>
            <AppBar position='static'>
                <Toolbar>
                    <Typography
                        variant='h6'
                        noWrap
                        component='div'
                    >
                        <FormattedMessage id={'George FE Test'} />
                    </Typography>

                    <Search>
                        <SearchIconWrapper>
                            <SearchIcon />
                        </SearchIconWrapper>
                        <StyledInputBase
                            placeholder={intl.formatMessage({id: 'Search'})}
                            value={props.searchInputValue}
                            onChange={props.onSearchInputValueChange}
                        />
                    </Search>

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
        </Box>
    );
};
