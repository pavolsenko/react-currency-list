import * as React from "react";
import {useIntl} from "react-intl";

import {Box, styled, Theme, useMediaQuery} from "@mui/material";

const CountryBox = styled(Box)(({theme}) => ({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginRight: theme.spacing(1),
    marginBottom: theme.spacing(1),
}));

const FlagWrapper = styled(Box)(() => ({
    width: 35,
    height: 24,
}));

const CountryWrapper = styled(Box)(({theme}) => ({
    backgroundColor: theme.palette.grey["600"],
    color: theme.palette.common.white,
    borderRadius: 3,
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(1),
    maxWidth: 180,
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    overflow: "hidden",
}));

const EmptyFlag = styled(Box)(({theme}) => ({
    width: 35,
    height: 24,
    backgroundColor: theme.palette.grey["200"],
    borderRadius: 3,
}));

interface ICountryFlagsProps {
    countryCodes: string[];
    countries: string[];
}

const MAXIMUM_FLAG_COUNT = 3;

export const CountryFlags: React.FC<ICountryFlagsProps> = (
    props: ICountryFlagsProps,
) => {
    const intl = useIntl();
    const isMd = useMediaQuery((theme: Theme) => theme.breakpoints.down("md"));

    /*
    Some countries are missing from the provided country flags - first check if flag exists
    In real app I would probably use SVGs as React components

    import {ReactComponent as FlagAT} from './at.svg';
    */
    const tryImageExists = (path: string) => {
        try {
            return require(`${path}`);
        } catch (err) {
            return null;
        }
    };

    const getMaxFlagsCount = (): number => {
        if (isMd) {
            return 1;
        }

        return MAXIMUM_FLAG_COUNT;
    };

    const renderMoreText = (): React.ReactNode => {
        if (props.countries.length <= getMaxFlagsCount()) {
            return null;
        }

        return (
            <>
                +{props.countries.length - getMaxFlagsCount()}&nbsp;
                <span>{intl.formatMessage({id: "more"})}</span>
            </>
        );
    };

    return (
        <Box sx={{display: "flex"}}>
            {props.countryCodes.map(
                (countryCode: string, index: number): React.ReactNode => {
                    if (index > getMaxFlagsCount() - 1) {
                        return null;
                    }

                    const image = tryImageExists(
                        "./flags/" + countryCode.toLowerCase() + ".png",
                    );
                    let imageElement = <EmptyFlag />;

                    if (image) {
                        imageElement = (
                            <img
                                src={image}
                                alt={countryCode}
                                width={35}
                                height={24}
                            />
                        );
                    }

                    return (
                        <CountryBox key={countryCode}>
                            <FlagWrapper>{imageElement}</FlagWrapper>

                            <CountryWrapper>
                                {props.countries[index]}
                            </CountryWrapper>
                        </CountryBox>
                    );
                },
            )}
            {renderMoreText()}
        </Box>
    );
};
