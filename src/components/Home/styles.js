import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    flex: 1,
    display: 'flex',
    minHeight: '100vh',
    flexDirection: 'column',
    background: theme.palette.primary.main,
  }
}));

export default useStyles;