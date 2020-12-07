import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  containerFooter: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  pagination: {
    '& .Mui-selected, .Mui-selected:hover': {
      backgroundColor: theme.palette.info.main,
      color: theme.palette.primary.light,
     },
  }
}));

export default useStyles;