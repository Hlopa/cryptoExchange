import React, {FC, memo, useCallback, useState } from 'react';
import { Box, Typography, Button } from '@mui/material';
import TextField from 'shared/ui/TextField/TextField';
import Autocomplete from 'shared/ui/Autocomplete/Autocomplete';
import ArrowDown from 'shared/icons/ArrowDown';
import { useCryptoTextFieldStyles } from './CryptoTextFieldStyles';
import { CryptoOptionType } from 'types/Crypto';

type CryptoTextFieldProps = {
    options: CryptoOptionType[];
    selectOption: CryptoOptionType; 
    setSelectOption: (CryptoOptionType) => void; 
    textFieldValue: string; 
    setTextFieldValue: (string) => void; 
    setErrorMessage: (string) => void;
    errorMessage?: string;
    loading?: boolean;
    readOnly?: boolean;
};

const CryptoTextField: FC<CryptoTextFieldProps> = memo((props) => {
  const {
    options, 
    selectOption, 
    setSelectOption, 
    textFieldValue, 
    setTextFieldValue, 
    errorMessage = '', 
    loading = false, 
    readOnly = false,
    setErrorMessage
  } = props; 

    const { classes } = useCryptoTextFieldStyles({readOnly});

  const [isOpenAutocomplete, setIsOpenAutocomplete] = useState(false);

  const handleAutocomplete = useCallback((_, option: CryptoOptionType) => {
    setSelectOption({
      label: option.label,
      value: option.value,
      icon: option.icon
    });
    setErrorMessage('')
    setIsOpenAutocomplete(false)
  }, [setErrorMessage, setSelectOption])


  const handleOpenAutocomplete = useCallback(() => {
    setIsOpenAutocomplete(true)
  }, [])


  const handleChangeTextField = useCallback((value: string) => {
    setTextFieldValue(value.replace(/[^.\d]+/g,"").replace( /^([^\.]*\.)|\./g, '$1' ));
    setErrorMessage('')
  }, [setErrorMessage, setTextFieldValue])


  if (isOpenAutocomplete) {
    return (
      <Autocomplete
        options={options}
        selectOption={selectOption}
        isOpen={isOpenAutocomplete}
        setIsOpen={setIsOpenAutocomplete}
        onChange={handleAutocomplete}
        placeholder="Search"
      />
    )
  }
  return (
    <Box className={classes.cryptoTextField}>
      <TextField
        value={textFieldValue}
        onChange={(e) => handleChangeTextField(e.target.value)}
        withoutBorder
        loading={loading}
        helperText={errorMessage}
        InputProps={{
          readOnly: readOnly
        }} 
      />
      <Button endIcon={<ArrowDown />} onClick={handleOpenAutocomplete}>
        <img src={selectOption.icon} alt={selectOption.value} loading="lazy"/>
        <Typography className={classes.btnText}>{selectOption.value}</Typography>
      </Button>
    </Box>
  )
})

export default CryptoTextField