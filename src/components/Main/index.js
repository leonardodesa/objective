/* eslint-disable no-use-before-define */
import React, { useEffect, useState, useCallback } from 'react';
import Typography from '@material-ui/core/Typography';

import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import Box from '@material-ui/core/Box';
import Pagination from '../Pagination';
import Modal from '@material-ui/core/Modal';
import Avatar from '@material-ui/core/Avatar';

import { paginate } from '../../utils'

import axios from 'axios';

import PhotoImage1 from '../../assets/photo.png';
import PhotoImage2 from '../../assets/photo-1.png';
import PhotoImage3 from '../../assets/photo-2.png';
import PhotoImage4 from '../../assets/photo-3.png';

import styles from './styles';

export default function Main() {
  const classes = styles();

  const [persons, setPersons] = useState([]);
  const [personSelected, setPersonSelected] = useState();
  const [page, setPage] = useState(1);
  const [filterPerson, setFilterPerson] = useState('');
  const [isMobile, setIsMobile] = useState(false);

  const [open, setOpen] = React.useState(false);

  const handleOpen = (person) => {
    if (isMobile) {
      setOpen(true);
      setPersonSelected(person);
    }
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleIconData = useCallback((data) => {
    const dataModified = data.map((value) => {
      switch (value.info.img) {
        case 'photo-1':
          return {...value, info: { ...value.info, img: PhotoImage1 }};
        case 'photo-2':
          return {...value, info: { ...value.info, img: PhotoImage2 }};
        case 'photo-3':
          return {...value, info: { ...value.info, img: PhotoImage3 }};
        case 'photo-4':
          return {...value, info: { ...value.info, img: PhotoImage4 }};
        default:
          return {...value, info: { ...value.info, img: PhotoImage1 }};
      }
    });

    return dataModified;
  }, []);

  const getPersons = useCallback(async () => {
    const { data } = await axios.get(`http://localhost:3001/persons?q=${filterPerson}&_page=${page}&_limit=${paginate}`);

    const dataModified = handleIconData(data);

    setPersons(dataModified);
  }, [filterPerson, handleIconData, page]);

  const handleChangeFilter = useCallback((e) => {
    setFilterPerson(e.target.value);
  }, []);

  const updatePage = ({ page, limit }) => {
    setPage(page);
  };

  const updateWindowDimensions = useCallback(() => {
    if (window.innerWidth <= 950) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  }, []);

  useEffect(() => {
    getPersons();
  }, [getPersons, page, filterPerson]);

  
  useEffect(() => {
    window.addEventListener("resize", updateWindowDimensions);    
    window.top.addEventListener("resize", updateWindowDimensions);    
    
    return (() => {
      window.removeEventListener("resize", updateWindowDimensions);    
      window.top.removeEventListener("resize", updateWindowDimensions);    
    });
  }, [updateWindowDimensions]);

  return (
    <>
      <main className={classes.mainContainer}>
        <Container className={[classes.container]}>
          <Box id="card-main" className={classes.boxContainer}>
              <Typography variant="h4" className={[classes.bold, classes.centerMobile]}>
                Busca de personagens
              </Typography>
              <Typography variant="body1" className={[classes.bold, classes.marginDescription, classes.centerMobile]}>
                Nome do personagem
              </Typography>
              <div className={classes.containerSearch}>
                <InputBase
                  className={classes.input}
                  onChange={handleChangeFilter} 
                  value={filterPerson} 
                  placeholder="Search…"
                  inputProps={{ 'aria-label': 'open drawer' }}
                  endAdornment={
                    <SearchIcon />
                  }
                />
              </div>
          </Box>
          <Grid container spacing={3}>
            <Grid item xs>
              <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="simple table">
                  <TableHead className={classes.tableHead}>
                      <TableCell>Personagem</TableCell>
                      <TableCell className={classes.hideColumnTable} align="left">Séries</TableCell>
                      <TableCell className={classes.hideColumnTable} align="left">Eventos</TableCell>
                  </TableHead>
                  <TableBody>
                    {persons.map((person) => (
                      <TableRow key={person.id} className={classes.tableRow} onClick={() => handleOpen(person)}>
                        <TableCell align="left">
                          <div className={classes.containerImg}>
                            <img src={person.info.img} alt={person.info.name} />
                            <Typography variant="body1" className={[classes.bold, classes.marginTextTable]}>
                              {person.info.name}
                            </Typography>
                          </div>
                        </TableCell>
                        <TableCell align="left" className={[classes.wordWrap, classes.hideColumnTable]}>
                          {person.info.series.map((serie) => (
                            <Typography variant="body1" className={[classes.bold, classes.marginTextTable]}>
                              {serie}
                            </Typography>
                          ))}
                        </TableCell>
                        <TableCell align="left" className={classes.hideColumnTable}>
                          {person.info.events.map((event) => (
                            <Typography variant="body1" className={[classes.bold, classes.marginTextTable]}>
                              {event}
                            </Typography>
                          ))}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Grid>
          </Grid>

          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
          >
            <div className={classes.paper}>
              <Avatar alt={personSelected?.info.name} src={personSelected?.info.img} className={classes.avatarMobile}/>

              <Typography variant="h5" align="center" className={[classes.bold, classes.marginPersonMobileName]}>
                {personSelected?.info.name}
              </Typography>

              <Typography variant="body1" align="center">
              <strong>Series:</strong> {personSelected?.info.series}
              </Typography>

              <Typography variant="body1" align="center">
                <strong>Events:</strong> {personSelected?.info.events}
              </Typography>
            </div>
          </Modal>
        </Container>
    </main>
    
    <footer>
      <Pagination updatePage={updatePage}/>
    </footer>
  </>
  );
}
