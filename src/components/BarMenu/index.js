import React from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import FolderIcon from '@material-ui/icons/Folder';
import { NavBar, Basket, StyledSVG } from './styles';
import { useDispatch } from 'react-redux';
import {
  createFolderAC,
  createFileAC,
  restoreDataAC
} from '../../redux/actionCreators';
import DescriptionIcon from '@material-ui/icons/Description';
import { useLocation, useHistory } from 'react-router-dom';

const BarMenu = ({ deleteData }) => {
  const location = useLocation();
  const history = useHistory()
  const dispatch = useDispatch();


  const createFolder = () => {   
    dispatch(createFolderAC({ id: Date.now() }));
  };

  const createFile = () => {
    dispatch(createFileAC({ id: Date.now() }));
  };

  const restoreData = () => {
    dispatch(restoreDataAC())
    history.push('/')
  }

  return (

    <NavBar
      container
      direction='row'
      justify='flex-start'
      alignItems='center'
    >


      {(location.pathname !== "/trash") ?
        <Grid container
          direction='row'
          justify='flex-start'
          alignItems='center'>
          <Grid item xs={1}>
            {' '}

            <Button
              variant='contained'
              startIcon={<DeleteIcon />}
              onClick={deleteData}

            >
              Delete
        </Button>
          </Grid>
          <Grid item xs={1}>
            {' '}
            <Button
              variant='contained'
              startIcon={<FolderIcon />}
              onClick={createFolder}
            >
              Create
            </Button>
          </Grid>
          <Grid item xs={1}>
            <Button
              variant='contained'
              startIcon={<DescriptionIcon />}
              onClick={createFile}
            >
              Create
                 </Button>
          </Grid>
          <Grid item xs={8}>

            <Basket
              variant='contained'
              startIcon={<StyledSVG />}
              onClick={() => history.push('/trash')}
            >

            </Basket>
          </Grid> 
          </Grid> :
        <Grid container>
          <Grid item xs={1}>
            {' '}

            <Button
              variant='contained'
              startIcon={<DeleteIcon />}
              onClick={deleteData}

            >
              Delete
                                </Button>
          </Grid>
          <Grid item xs={1}>
            {' '}

            <Button
              variant='contained'
              onClick={restoreData}
            >
              Restore
                            </Button>
          </Grid>
          </Grid>

      }


    </NavBar>

















    // <div>
    //   <NavBar
    //     container
    //     direction='row'
    //     justify='flex-start'
    //     alignItems='center'
    //   >
    //     <Grid item xs={1}>
    //       {' '}

    //       <Button
    //         variant='contained'
    //         startIcon={<DeleteIcon />}
    //         onClick={deleteData}

    //       >
    //         Delete
    //       </Button>
    //     </Grid>
    //     {location.pathname !== "/trash" ?
    //       <Grid item xs={1}>
    //         {' '}
    //         <Button
    //           variant='contained'
    //           startIcon={<FolderIcon />}
    //           onClick={createFolder}
    //         >
    //           Create
    //       </Button>
    //       </Grid> : null}
    //     {location.pathname !== "/trash" ?
    //       <Grid item xs={1}>
    //         <Button
    //           variant='contained'
    //           startIcon={<DescriptionIcon />}
    //           onClick={createFile}
    //         >
    //           Create
    //       </Button>
    //       </Grid> : null}
    //     {location.pathname !== "/trash" ?
    //       <Grid item xs={8}>

    //         <Basket
    //           variant='contained'
    //           startIcon={<StyledSVG />}
    //           onClick={() => history.push('/trash')}
    //         >

    //         </Basket>
    //       </Grid> : <Grid item xs={1}>
    //         {' '}

    //         <Button
    //           variant='contained'
    //           onClick={restoreData}
    //         >
    //           Restore
    //       </Button>
    //       </Grid>}
    //   </NavBar>
    // </div>
  );
};

export default BarMenu;
