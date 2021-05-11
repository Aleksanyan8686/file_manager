import React, { useEffect, useState} from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { Name } from './styles';
import { useDispatch,useSelector } from 'react-redux';
import { StyledFolderIcon } from './styles';
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';
import { Input } from './styles';
import {
  setFolderNameAC,
  setChildFolderNameAC,
  setCheckedDataAC,
  checkedOptionsAC,
  openFolderAC,
  openTrashFolderAC
} from '../../redux/actionCreators';

const Folder = ({ id, index, folderName }) => {
  
  const history = useHistory();
  const location = useLocation();
  const path=location.pathname.slice(1)
  const dispatch = useDispatch();
  const {checkedData}=useSelector(state=>state.foldersData)
  const [value, setValue] = useState('');
  const [checked, setChecked] = useState(false);
  const [editMode, setEditMode] = useState(false)
  

useEffect(()=>{
if(checkedData.indexOf(id)!==-1){
  setChecked(true)
}else {
  setChecked(false)
}
},[checkedData])

  const handleValue = (event) => {
    setValue(event.target.value);
  };

  const handleSetEditMode = () => {
    setEditMode(true)
  }


   const handleBlur = (id) => {
      dispatch(setFolderNameAC(id, value));
      setEditMode(false)
  };
  const saveOnKeypress = (e) => {
    if (e.key == "Enter") {
      handleBlur(id)
    }
  }

  const checkFolder = (id) => {
    dispatch(setCheckedDataAC(id));
  };

  const openFolder = (id) => {
    history.push(`/${id}`);

    dispatch(checkedOptionsAC(path))
    if (location.pathname !== '/trash') {
      dispatch(openFolderAC(id))
    }else{
      dispatch(openTrashFolderAC(id))
    }
  };

  return (
    <>
      <Grid item key={id}>
        <IconButton>
          <StyledFolderIcon
            checked={checked}
            htmlColor='yellow'
            fontSize='inherit'
            onClick={() => checkFolder(id,folderName)}
            onDoubleClick={() => openFolder(id)}
          />
        </IconButton>

        <div onDoubleClick={handleSetEditMode}>
          {folderName && !editMode ? (
            <Name>{folderName}</Name>
          ) : (
            <Input
              autoFocus
              value={value}
              onChange={handleValue}
              onBlur={() => {
                handleBlur(id);
              }}
              onKeyPress={saveOnKeypress}
            />
          )}
        </div>
      </Grid>
    </>
  );
};

export default Folder;
