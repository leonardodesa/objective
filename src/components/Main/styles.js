import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    flex: 1,
    display: 'flex',
  },
  centerMobile: {
    [theme.breakpoints.down('sm')]: {
      textAlign: 'center',
    },
  },
  avatarMobile: {
    [theme.breakpoints.down('sm')]: {
      margin: '0 auto',
      height: theme.spacing(7),
      width: theme.spacing(7),
      outline: 'none'
    },
  },
  marginPersonMobileName: {
    [theme.breakpoints.down('sm')]: {
      margin: theme.spacing(1, 0, 2),
    },
  },
  paper: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    width: '80%',
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    transform: 'translate(-50%, -50%)',
    outline: 'none',
  },
  container: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    [theme.breakpoints.down('sm')]: {
      alignItems: 'center',
    },
  },
  boxContainer: {
    maxWidth: 345,
    backgroundColor: 'transparent',
    margin: theme.spacing(6, 0),
    color: theme.palette.text.primary,
  },
  background: {
    flex: 1,
  },
  title: {
    flexGrow: 1,
  },
  infoUser: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  bold: {
    fontWeight: 'bold',
  },
  marginDescription: {  
    margin: theme.spacing(2, 0, 1),
  },
  colorTextUser: {
    color: theme.palette.secondary.dark,
  },
  containerSearch: {
    borderRadius: theme.shape.borderRadius,
    backgroundColor: theme.palette.common.white,
    width: '80%',
    [theme.breakpoints.down('sm')]: {
      margin: '0 auto',
      width: '100%',
    },
  },
  hideColumnTable: {
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  input: {
    width: '100%',
    padding: theme.spacing(0, 2),
    fontStyle: 'italic',
    color: theme.palette.secondary.main,
  },
  inputRoot: {
    color: 'inherit',
  },
  table: {
    background: theme.palette.primary.main,
    tableLayout: 'fixed',
  },
  tableHead: {
    backgroundColor: 'transparent',
  },
  tableRow: {
    backgroundColor: theme.palette.primary.light,
    [theme.breakpoints.down('sm')]: {
      cursor: 'pointer'
    },
    // borderBottom: theme.spacing(2),
    // borderColor: theme.palette.primary.main,
    // borderStyle: 'solid',
    // borderRadius: theme.spacing(2),
  },
  containerImg: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center', 
  },
  marginTextTable: {
    marginLeft: theme.spacing(2)
  },
  wordWrap: {
    wordWrap: 'break-word',
  },
  containerFooter: {
    flex: 1,
  },
}));

export default useStyles;