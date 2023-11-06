import { COLORS } from 'app/styles/colors';
import { makeStyles } from 'tss-react/mui';

export const useCryptoTextFieldStyles = makeStyles<{readOnly: boolean}>()((theme, {readOnly}) => ({
  cryptoTextField: {
    display: 'flex',
    borderRadius: 5,
    height: 50,
    transition: 'all 0.3s',
    '& input[type=number]::-webkit-inner-spin-button': {
      "-webkit-appearance": "none",
      margin: 0
    },
    '& input[type=number]::-webkit-outer-spin-button': {
      "-webkit-appearance": "none",
      margin: 0
    },
    '& .MuiOutlinedInput-input': {
      border: `1px solid ${COLORS.gray500}`,
      borderRight: 'none',
      borderTopLeftRadius: 5,
      borderBottomLeftRadius: 5,
      overflow: 'hidden',
      height: 50,
      boxSizing: 'border-box',
      cursor: readOnly ? 'auto' : 'text'
    },
    '&:hover': {
      '& .MuiOutlinedInput-input': {
        border: `1px solid ${COLORS.gray600}`,
        borderRight: 'none',
      },
      '& .MuiButtonBase-root': {
        border: `1px solid ${COLORS.gray600}`,
        borderLeft: 'none',
      },
      '& .MuiButtonBase-root::before': {
        backgroundColor: COLORS.gray600
      }
    },
    '& .MuiInputBase-formControl': {
      borderTopLeftRadius: 5,
      borderBottomLeftRadius: 5,
      overflow: 'hidden',
      paddingLeft: 0
    },
    '& .MuiInputBase-input': {
      backgroundColor: COLORS.gray300,
    },
    '& .MuiButtonBase-root': {
      position: 'relative',
      backgroundColor: COLORS.gray300,
      paddingRight: theme.spacing(1),
      paddingLeft: theme.spacing(4),
      borderRadius: 0,
      borderTopRightRadius: 5,
      borderBottomRightRadius: 5,
      minWidth: 'unset',
      border: `1px solid ${COLORS.gray500}`,
      borderLeft: 'none',
      '&:hover, &:focus, &:active': {
        backgroundColor: COLORS.gray300,
      },
      '&.Mui-focusVisible': {
        color: COLORS.gray500,
        backgroundColor: COLORS.gray500,
      },
      '&::before': {
        content: "''",
        position: 'absolute',
        left: 0,
        top: '50%',
        width: 1,
        height: '70%',
        transform: 'translateY(-50%)',
        backgroundColor: COLORS.gray500,
        transition: 'all 0.3s',
      },

    },

  },
  btnText: {
    marginLeft: theme.spacing(1.5),
    paddingRight: theme.spacing(2.7)
  }
}));