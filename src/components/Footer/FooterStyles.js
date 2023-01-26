import { makeStyles } from '@mui/styles';


const useStyles = makeStyles((theme) => ({
  title: {
    fontSize: '20px !important',
    fontWeight: '800 !important',
    color: 'white !important'
  },
  text: {
    fontSize: '15px !important',
    color: 'white !important'
  },
  icon: {
    fontSize: '15px  !important',
    color: 'white !important'
  },
  'customhape': {
    // position: 'absolute',
    top: '0',
    left: '0',
    width: '100%',
    overflow: 'hidden',
    lineHeight: '0',
    // height: '20%',
    '& .shapeFill': {
      position: 'relative',
      display: 'block',
      width: 'calc(50% + 1.3px)',
      height: '2px'
    }
  },
  shapeFill: {
    fill: 'white'
  }
}));

export { useStyles };
