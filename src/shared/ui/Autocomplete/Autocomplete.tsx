import { Autocomplete as DefaultAutocomplete, FormControl, TextField, Typography, Box, ClickAwayListener } from '@mui/material';
import React from 'react';

import { useAutocompleteStyles } from './AutocompleteStyles';
import ArrowDown from '../../icons/ArrowDown';
import { COLORS } from 'app/styles/colors';



const Autocomplete = (props) => {
  const { options, label, error, placeholder, helperText, onChange, isOpen, setIsOpen, ...other } = props;
  const { classes } = useAutocompleteStyles();

  const handleChange = (e, v) => {
    // @ts-ignore
    onChange(e, v);
  };

  const handleClickAway = () => {
    setIsOpen(false)
  }

  const createOptionLabel = (label) => {
    const ticker = label.split(' ')[0];
    const fullName = label.split(' ').slice(1).join(' ');
    return <Box display={'flex'}>
      <Typography width={'50px'}>{ticker}</Typography>
      <Typography flexGrow={1} component={'span'} color={COLORS.gray800}>{fullName}</Typography>
    </Box>
  }

  return (
    <ClickAwayListener
      mouseEvent="onMouseDown"
      touchEvent="onTouchStart"
      onClickAway={handleClickAway}
    >
      <FormControl fullWidth className={classes.formControl}>
        <DefaultAutocomplete
          disablePortal
          onChange={handleChange}
          options={options}
          popupIcon={<ArrowDown />}
          disableClearable
          open={isOpen}
          renderInput={(params) => (
            <TextField
              {...params}
              placeholder={placeholder}
              id="search"
              helperText={helperText}
              error={error}
            />
          )}
          renderOption={(props, option: any) => (
            <Box component="li" sx={{ '& > img': { mr: 1.5, flexShrink: 0 } }} {...props}>
              <img
                width="20"
                src={option.icon}
                alt=""
              />
              {createOptionLabel(option.label)}
            </Box>
          )}
          {...other}
        />
      </FormControl>
    </ClickAwayListener>
  );
};

export default Autocomplete;
