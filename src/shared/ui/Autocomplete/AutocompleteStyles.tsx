import { COLORS } from 'app/styles/colors';
import { makeStyles } from 'tss-react/mui';

export const useAutocompleteStyles = makeStyles()((theme) => ({
  formControl: {
    '& .MuiFormHelperText-root': {
      marginLeft: theme.spacing(1),
      marginTop: 0,
    },
    '& .MuiInputBase-root.MuiOutlinedInput-root': {
      backgroundColor: `${COLORS.gray300} !important`,
      cursor: 'pointer',
      height: 50,
      '&:hover fieldset': {
        border: `1px solid ${COLORS.gray600} !important`,
        borderBottom: `1px solid ${COLORS.gray500} !important`
      },
      '&.Mui-focused fieldset': {
        border: `1px solid ${COLORS.gray600} !important`,
        borderBottom: `1px solid ${COLORS.gray500} !important`
      },
    },
    '& .MuiOutlinedInput-input': {
      'color': COLORS.black,
      'fontSize': theme.typography.pxToRem(14),
      'lineHeight': '157%',
      '&:-webkit-autofill': {
        background: COLORS.gray300,
        WebkitBoxShadow: `0 0 0 1000px ${COLORS.gray300} inset !important`,
      },
      '&::placeholder': {
        color: COLORS.gray800,
      },
    },
    '& .MuiOutlinedInput-notchedOutline': {
      borderColor: COLORS.gray600,
      borderTopRightRadius: 5,
      borderTopLeftRadius: 5,
      borderBottomRightRadius: 0,
      borderBottomLeftRadius: 0,
      borderBottom: `1px solid ${COLORS.gray500} !important`
    },
    '& .MuiIconButton-root': {
      '&:hover': {
        backgroundColor: 'unset',
      },
    },
    input:{
      cursor: 'pointer',
      userSelect: 'none',
    },
    '& .MuiAutocomplete-listbox':{
      backgroundColor: COLORS.gray300,
      padding: 0
    },
    '& .MuiPaper-root':{
        boxShadow: 'none',
        borderTopRightRadius: 0,
        borderTopLeftRadius: 0,
        borderBottomRightRadius: 5,
        borderBottomLeftRadius: 5,
        border: `1px solid ${COLORS.gray600}`,
        borderTop: `1px solid ${COLORS.gray300}`,
    },
    '& .MuiAutocomplete-option':{
      padding: theme.spacing(1.6, 2, 1.5, 2),
      '&.Mui-focused':{
        backgroundColor: COLORS.gray400
      }
    },
    '& .MuiAutocomplete-listbox .MuiAutocomplete-option.Mui-focused':{
      backgroundColor: COLORS.gray400
    }
  },

}));