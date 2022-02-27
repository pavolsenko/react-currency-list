import * as React from 'react';

import {
    Box,
    CircularProgress,
    Container,
    styled,
} from '@mui/material';

const LoadingWrapper = styled(Container)(({theme}) => ({
    display: 'flex',
    justifyContent: 'center',
    marginTop: theme.spacing(15),
}));

export const Loading: React.FC = () => {
    return (
        <LoadingWrapper>
            <Box>
                <CircularProgress/>
            </Box>
        </LoadingWrapper>
    );
};
