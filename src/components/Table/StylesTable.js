import { makeStyles } from '@mui/styles';


const useStyles = makeStyles((theme) => ({
  contetTable: {
    color: 'black !important',
    fontSize: '16px',
    '& td': {
      color: 'black',
      fontSize: '15px'
    }
  },
  headersTable: {
    color: `${theme.palette.primary.main} !important`,
    '& th': {
      fontSize: '25px',
      fontWeight: '800 !important'
    }
  }
}));

export { useStyles };
