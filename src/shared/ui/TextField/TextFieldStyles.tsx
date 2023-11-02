import { COLORS } from 'app/styles/colors';
import { makeStyles } from 'tss-react/mui';

export const useTextFieldStyles = makeStyles<{ withoutBorder: boolean }>()((theme, { withoutBorder }) => ({
  root:{
    borderRadius: withoutBorder ? 0 :  5,
    paddingRight: 0, 
    border: withoutBorder ? 'none' : `1px solid ${COLORS.gray500}`,
    '&:hover fieldset': {
      border: withoutBorder ? 'none' : `1px solid ${COLORS.gray600} !important`,
    },
    '&.Mui-focused fieldset': {
      border: withoutBorder ? 'none' : `1px solid ${COLORS.gray600} !important`,
    },
  },
  notchedOutline: {
    borderRadius: withoutBorder ? 0 : 5,
    overflow: 'hidden',
    border: withoutBorder ? 'none' : `1px solid ${COLORS.gray500}`,
    transition: 'all 0.3s',
  },
  input: {
    transition: 'all 0.3s',
    color: COLORS.black,
    background: COLORS.gray300,
    backgroundColor: `${COLORS.gray300} !important`,
    borderRadius: withoutBorder ? 0 : 5,
    lineHeight: '143.75%',
    padding: '14px 16px 13px',
    '&:-webkit-autofill': {
      background: COLORS.gray300,
      WebkitBoxShadow: `0 0 0 1000px ${COLORS.gray300} inset !important`,
    },
    '&::placeholder': {
      color: COLORS.gray500,
    },
  },
  error: {
    // 'fieldset': {
    //   borderColor: `${COLORS.red} !important`,
    // },
    // '&:hover fieldset': {
    //   borderColor: `${COLORS.red} !important`,
    // },
  },
  disabled: {
    // 'fieldset': {
    //   borderColor: `${COLORS.gray200} !important`,
    // },
    // '&:hover fieldset': {
    //   borderColor: `${COLORS.gray200} !important`,
    // },
    // 'input': {
    //   color: COLORS.gray200,
    // },
  },
  label: {
    lineHeight: '133%',
    marginBottom: theme.spacing(0.5)
  },
  adornedEnd: {
    // backgroundColor: COLORS.gray100,
  },
  formControl: {
    border: 'none',
    '& .MuiFormHelperText-root': {
      marginLeft: theme.spacing(1),
      marginTop: 0,
    },
  },
}));