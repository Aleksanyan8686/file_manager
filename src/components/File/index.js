import React, { useState,useEffect } from 'react';
import { Name } from './styles';
import { useDispatch,useSelector} from 'react-redux';
import { StyledDescriptionIcon } from './styles';
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';
import { Input } from './styles';
import { useHistory} from 'react-router-dom';
import {
  setFileNameAC,
  setCheckedDataAC,
} from '../../redux/actionCreators';

const File = ({ id, fileName }) => {

  const [value, setValue] = useState('');
  const [checked, setChecked] = useState(false);
  const [editMode, setEditMode] = useState(false)
  const {checkedData}=useSelector(state=>state.foldersData)
  const dispatch = useDispatch();
  const history = useHistory();


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

  const handleBlur = (id) => {
      dispatch(setFileNameAC(id, value));
      setEditMode(false) 
  };

  const handleSetEditMode = () => {
    setEditMode(true)
  }

  const checkFolder = (id) => {
    dispatch(setCheckedDataAC(id));
  };

  const openFile = (id) => {
    history.push(`/file/${id}`);
  };

  const saveOnKeypress=(e)=>{
    if(e.key=="Enter"){
      handleBlur(id)
    }
   }

  return (
    <>
      <Grid item key={id}>
        <IconButton>
          <StyledDescriptionIcon
            style={checked ? { backgroundColor: 'black' } : null}
            htmlColor='yellow'
            fontSize='inherit'
            onClick={() => checkFolder(id)}
            onDoubleClick={() => openFile(id)}
          />
        </IconButton>

        <div onDoubleClick={handleSetEditMode}>
          {fileName && !editMode ? (
            <Name>{fileName}</Name>
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

export default File;
