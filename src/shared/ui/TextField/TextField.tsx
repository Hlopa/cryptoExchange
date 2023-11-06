import { CircularProgress, FormControl, Typography, Box } from '@mui/material';
import DefaultTextField, { TextFieldProps as MuiTextFieldProps } from '@mui/material/TextField';
import { FC, memo, ChangeEvent } from 'react';
import { useTextFieldStyles } from './TextFieldStyles';

type TextFieldProps = MuiTextFieldProps & {
  label?: string;
  withoutBorder?: boolean;
  loading?: boolean;
  value: string;
  onChange:(e:ChangeEvent<HTMLInputElement>) => void;
};

const TextField: FC<TextFieldProps> = memo((props) => {
  const { label = '', InputProps, withoutBorder = false, loading = false, value, onChange, ...otherProps } = props;
  const { classes } = useTextFieldStyles({ withoutBorder });

  return (
    <FormControl fullWidth className={classes.formControl}>
      {label && <Typography className={classes.label}>{label}</Typography>}
      <DefaultTextField
        InputProps={{
          classes: classes,
          autoComplete: 'off',
          startAdornment: loading && (
            <Box sx={{ backgroundColor: 'transparent' }} position={"absolute"} left={10} top={5}>
              <CircularProgress />
            </Box>
          ),
          ...InputProps
        }}
        autoComplete="off"
        disabled={loading}
        value={loading ? '' : value}
        onChange={onChange}
        {...otherProps}
      />
    </FormControl>
  );
});

export default TextField;
