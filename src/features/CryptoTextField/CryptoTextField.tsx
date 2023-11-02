import React, { useState } from 'react';
import { Box, Typography, Button } from '@mui/material';
import TextField from 'shared/ui/TextField/TextField';
import Autocomplete from 'shared/ui/Autocomplete/Autocomplete';
import ArrowDown from 'shared/icons/ArrowDown';
import { useCryptoTextFieldStyles } from './CryptoTextFieldStyles';

const CryptoTextField = ({ options, selectOption, setSelectOption, textFieldValue, setTextFieldValue }) => {
  const [isOpenAutocomplete, setIsOpenAutocomplete] = useState(false);

  const { classes }  = useCryptoTextFieldStyles();

  const handleAutocomplete = (e, v) => {
    setSelectOption({
      label: v.value,
      value: v.value,
      icon: v.icon
    });

    console.log(e, v)
    setIsOpenAutocomplete(false)
  };

  const handleOpenAutocomplete = () => {
    setIsOpenAutocomplete(true)
  }

  if (isOpenAutocomplete) {
    return (
      <Autocomplete
        options={options}
        isOpen={isOpenAutocomplete}
        setIsOpen={setIsOpenAutocomplete}
        onChange={handleAutocomplete}
        placeholder="Search"
      />
    )
  }
  return (
    <Box className={classes.cryptoTextField}>
      <TextField value={textFieldValue} onChange={(e) => setTextFieldValue(e.target.value)} withoutBorder />
      <Button endIcon={<ArrowDown />} onClick={handleOpenAutocomplete}>
        <img src={selectOption.icon} />
        <Typography className={classes.btnText}>{selectOption.value}</Typography>
      </Button>
    </Box>
  )
}

export default CryptoTextField