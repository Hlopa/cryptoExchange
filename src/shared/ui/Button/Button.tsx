import DefaultButton, { ButtonProps as MuiButtonProps } from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import { Box } from '@mui/material';

import { useButtonStyles } from './ButtonStyles';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import { memo, FC, ReactNode } from 'react';


type ButtonProps = MuiButtonProps & {
  children: ReactNode;
  loading?: boolean;
  disabled?: boolean;
  ariaLabel?: string;
  errorMessage: string;
};

const Button: FC<ButtonProps> = memo((props) => {
  const {
    children,
    loading = false,
    disabled = false,
    ariaLabel = '',
    errorMessage,
    ...otherProps
  } = props;
  const { classes } = useButtonStyles();

  const isDisabledBtn = loading || disabled || Boolean(errorMessage);

  return (
    <Box className={classes.buttonBox}>
      <DefaultButton
        variant="contained"
        disableRipple
        className={classes.root}
        aria-label={ariaLabel}
        disabled={isDisabledBtn}
        {...otherProps}
      >
        {loading ? <CircularProgress size={24} color="secondary" /> : children}
      </DefaultButton>
      {errorMessage && <ErrorMessage text={errorMessage} />}
    </Box>

  );
});


export default Button;
