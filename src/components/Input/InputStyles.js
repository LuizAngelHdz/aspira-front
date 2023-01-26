import { makeStyles } from '@mui/styles';
const useStyles = makeStyles((theme) => ({
  error: {
    '& :hover': {
    },
    '& .MuiFilledInput-input': {
      transition: ' 0.6s ease-out !important',
      borderRadius: '5px',
      border: 'none',
      '&:focus': {
        color: theme.palette.common.error
      },
      '&:placeholder ': {
        // color: 'white !important'
      },
      '&:label ': {
        // color: 'white !important'
      }
    },
    '& label': {
      // color: 'red'
    },
    '& label.Mui-focused': {
      // color: 'red'
    },
    '& label.MuiFormLabel-filled': {
      // color: 'red'
    },
    '& .MuiFilledInput-adornedEnd': {
      backgroundColor: 'none',
      color: 'red'
    },
    '& .MuiFilledInput-adornedStart': {
      backgroundColor: 'none',
      color: 'white'
    },
    '& .MuiIconButton-label': {
      color: theme.palette.common.white
    },
    '& ::placeHolder': {
      color: 'white !important'
    },
    '& .MuiButtonBase-root': {
      color: 'white !important'
    }
  },
  root: {
    '& .MuiFilledInput-input': {
      transition: ' 0.6s ease-out !important',
      // color: `${theme.palette.common.white} !important`,
      borderRadius: '5px',
      border: 'none',
      '&:focus': {
        // color: theme.palette.common.white
      },
      '&:placeholder ': {
        // color: 'white !important'
      },
      '&:label ': {
        // color: 'white !important'
      }
    },
    '& label': {
      color: theme.palette.common.white
    },
    '& label.Mui-focused': {
      color: theme.palette.common.white
    },
    '& label.MuiFormLabel-filled': {
      color: theme.palette.common.white
    },
    '& .MuiFilledInput-adornedEnd': {
      backgroundColor: 'none',
      color: theme.palette.common.white
    },
    '& .MuiFilledInput-adornedStart': {
      backgroundColor: 'none',
    },
    '& .MuiIconButton-label': {
      color: theme.palette.common.white
    },
    '& ::placeHolder': {
    },
    '& .MuiButtonBase-root': {
    },
    '& input[type=number]': {
      '-moz-appearance': 'textfield'
    },
    '& input[type=number]::-webkit-outer-spin-button': {
      '-webkit-appearance': 'none',
      margin: 0
    },
    '& input[type=number]::-webkit-inner-spin-button': {
      '-webkit-appearance': 'none',
      margin: 0
    }
  },
  rootbg: {
    '& .MuiFilledInput-input': {
      backgroundColor: theme.palette.common.white,
      border: '1px solid #D6D6D6',
      color: `${theme.palette.common.black} !important`,
      '&:focus': {
        color: theme.palette.common.black
      }
    },
    '& .MuiFilledInput-adornedEnd': {
      backgroundColor: 'theme.palette.grey[200]'
    },
    '& .MuiFilledInput-adornedStart': {
      backgroundColor: 'theme.palette.grey[200]'
    }
  },
  helperText: {
    color: theme.palette.error.main,
    textAlign: 'start',
    fontSize: '0.75rem !important',
    marginRight: '14px !important',
    marginTop: '0px !important'
  },
  labelbg: {
    color: theme.palette.error.main
  }
}));

export { useStyles };
