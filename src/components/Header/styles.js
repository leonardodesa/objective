import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  background: {
    background: theme.palette.primary.light,
  },
  title: {
    flexGrow: 1,
  },
  infoUser: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  name: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      marginRight: theme.spacing(1),
    },
  },
  bold: {
    fontWeight: 'bold',
  },
  marginTextInfoUser: {
    marginRight: theme.spacing(1),
  },
  colorTextUser: {
    color: theme.palette.secondary.dark,
  },
  infoUserLineHeght: {
    [theme.breakpoints.down('sm')]: {
      lineHeight: 1.2,
    },
  }
}));

export default useStyles;