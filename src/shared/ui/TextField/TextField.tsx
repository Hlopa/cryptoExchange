import { FormControl,  Typography } from '@mui/material';
import DefaultTextField from '@mui/material/TextField';
import { FC  } from 'react';
import { useTextFieldStyles } from './TextFieldStyles';


const TextField: FC<any> = (props) => {
  const { label = '', InputProps, withoutBorder = false, ...rest } = props;
  const { classes } = useTextFieldStyles({withoutBorder});

  return (
    <FormControl fullWidth className={classes.formControl}>
      {label && <Typography className={classes.label}>{label}</Typography>}
      <DefaultTextField
        InputProps={{ classes: classes, autoComplete: 'off', ...InputProps }}
        autoComplete="off"
        {...rest}
      />
    </FormControl>
  );
};

export default TextField;
