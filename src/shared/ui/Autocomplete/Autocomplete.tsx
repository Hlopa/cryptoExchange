import { Autocomplete as DefaultAutocomplete, FormControl, TextField, Typography, Box, ClickAwayListener } from '@mui/material';
import {AutocompleteProps as MuiAutocompleteProps} from '@mui/material/Autocomplete';
import React, { FC, memo, useCallback, useState } from 'react';
import { useAutocompleteStyles } from './AutocompleteStyles';
import { COLORS } from 'app/styles/colors';
import Close from 'shared/icons/Close';
import { CryptoOptionType } from 'types/Crypto';

export type AutocompleteProps = Omit<MuiAutocompleteProps<any, any, any, any>, 'renderInput'> & {
  options: CryptoOptionType[];
  selectOption: CryptoOptionType;
  isOpen: boolean;
  setIsOpen: (boolean) => void;
  onChange: (e: any, v: any) => void;
  placeholder: string;
};

const Autocomplete: FC<AutocompleteProps> = memo((props) => {
  const { options, selectOption, setIsOpen,  isOpen, onChange, placeholder, ...other } = props;
  const { classes } = useAutocompleteStyles();

  const [rerender, setRerender] = useState<number>(1);

  const handleChange = useCallback((_, option: CryptoOptionType) => {
    onChange(_, option);
  }, [onChange]);

  const handleClickAway = useCallback(() => {
    setIsOpen(false)
  }, [setIsOpen])


  const handleClearSearch = () => {
    setRerender(rerender+1)
  }

  const createOptionLabel = useCallback((label: string) => {
    const ticker = label.split(' ')[0].toUpperCase();
    const fullName = label.split(' ').slice(1).join(' ');
    return <Box display={'flex'} alignItems={'center'} gap={1}>
      <Typography minWidth={'100px'}>{ticker}</Typography>
      <Typography flexGrow={1} component={'span'} color={COLORS.gray800}>{fullName}</Typography>
    </Box>
  }, [])


  return (
    <ClickAwayListener
      mouseEvent="onMouseDown"
      touchEvent="onTouchStart"
      onClickAway={handleClickAway}
    >
      <FormControl fullWidth className={classes.formControl}>
        <DefaultAutocomplete
          key={rerender}
          disablePortal
          onChange={handleChange}
          options={options}
          popupIcon={<Box onClick={handleClearSearch}><Close /></Box>}
          clearIcon={null}
          disableClearable
          open={isOpen}
          renderInput={(params) => (
            <TextField
              {...params}
              placeholder={placeholder}
            />
          )}
          renderOption={(props, option: CryptoOptionType) => (
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
});

export default Autocomplete;
