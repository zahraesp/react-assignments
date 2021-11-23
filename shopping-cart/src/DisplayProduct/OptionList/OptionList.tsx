import React from 'react';
import { Box } from '@mui/material';
import OptionItem from '../OptionItem/OptionItem';
import "../DisplayProduct.css";

const OptionList = (props: any) => {
    const { item } = props;

    return (
        <Box className='product__text--desc' >
            {item.map((item: any) =>
                <OptionItem key={item} item={item} />
             ) }
        </Box>
    );
}

export default OptionList;
