// Тип AutocompleteProps импортится правильно, но IDE выдаёт ошибку
import DefaultButton from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';

import { useButtonStyles } from './ButtonStyles';


const Button = (props: any) => {
  const {
    nextLink,
    linkProps,
    loading = false,
    disabled = false,
    ariaLabel = '',
    ...otherProps
  } = props;
  const { classes } = useButtonStyles();

  return (
    <DefaultButton
      variant="contained"
      disableRipple
      className={classes.root}
      aria-label={ariaLabel || props.children}
      {...otherProps}
      disabled={loading || disabled}
    >
      {loading ? <CircularProgress size={24} color="secondary" /> : props.children}
    </DefaultButton>
  );
};


export default Button;
