import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  container: {
    padding: 2,
    borderRadius: '10px'
  },
  boxContent: {
    background:
      'transparent linear-gradient(142deg, #176498 0%, #0095EC 100%) 0% 0% no-repeat padding-box'
  },
  icon: { fontSize: '50px' },
  fontWeightBold: {
    fontSize: '22px !important',
    // color: `${theme.palette.common.white} !important`,
    // padding: theme.spacing(1.5)
  },
  iconSuccess: { fontSize: '50px' },
  iconError: { fontSize: '35px !important' },
  button: {
    backgroundColor: '#0F204B!important',
    color: 'white !important'
  },
  iconClose: {

    fontSize: '30px',
    cursor: 'pointer'
  },
  helpText: {

    fontWeight: 800,
    fontSize: '500px !important'
  }
}));

export { useStyles };
