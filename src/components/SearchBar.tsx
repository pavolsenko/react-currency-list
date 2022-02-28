import * as React from "react";
import {useIntl} from "react-intl";

import {AppBar, Box, InputBase, Toolbar, alpha, styled} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const Search = styled("div")(({theme}) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    marginRight: theme.spacing(2),
    marginLeft: 0,

    "&:hover": {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
}));

const SearchIconWrapper = styled(Box)(({theme}) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({theme}) => ({
    color: "inherit",
    "& .MuiInputBase-input": {
        padding: theme.spacing(1, 1, 1, 0),
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create("width"),
    },
}));

interface ISearchBarProps {
    searchInputValue: string;
    onSearchInputValueChange: (
        event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
    ) => void;
}

export const SearchBar: React.FC<ISearchBarProps> = (
    props: ISearchBarProps,
) => {
    const intl = useIntl();

    return (
        <AppBar
            color={"primary"}
            position={"sticky"}
            elevation={0}
            sx={{marginTop: 7}}
        >
            <Toolbar>
                <Search>
                    <SearchIconWrapper>
                        <SearchIcon />
                    </SearchIconWrapper>
                    <StyledInputBase
                        placeholder={intl.formatMessage({id: "Search"})}
                        value={props.searchInputValue}
                        onChange={props.onSearchInputValueChange}
                    />
                </Search>
            </Toolbar>
        </AppBar>
    );
};
