import React, { useEffect, useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import {
  StyledContainer,
  StyledBox,
  StyledTextarea,
} from './style';
import { useLocation, useHistory } from 'react-router-dom';
import { saveFileBodyAC, } from '../../redux/actionCreators';


const FileEditor = () => {


  const [value, setValue] = useState('');
  const [editMode, setEditMode] = useState(false);
  const history = useHistory();
  const location = useLocation();
  const dispatch = useDispatch();
  const id = location.pathname.slice(6);

  const { filesData, trash } = useSelector((state) => state.foldersData)
  const filetext = filesData.filter((item) => item.id == id)[0]?.body;
  const treshText = trash.filter((item) => item.id == id)[0]?.body;
  const text = filetext ? filetext : treshText

  useEffect(() => {
    setValue(text);
  }, []);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const wrapper = useRef(null)
  const saveBody = () => {
    dispatch(saveFileBodyAC({ id, value }));
    history.goBack();
  };

  useEffect(() => {
    document.addEventListener("click", function (e) {
      if (e.target == wrapper.current) {
        history.goBack();
      }

    })
    return () => {
      document.removeEventListener("click", function (e) {
        if (e.target == wrapper.current) {
          history.goBack();
        }

      })
    }
  }, [])
  
  return (
    <>
      <StyledContainer ref={wrapper}>
        <StyledBox maxWidth='sm'>
          <Button
            variant='contained'
            startIcon={<SaveIcon />}
            onClick={saveBody}
          >
            Save
          </Button>
          <StyledTextarea
            id='standard-full-width'
            placeholder='Write something!'
            fullWidth
            multiline='true'
            rows='35'
            margin='normal'
            onChange={handleChange}
            value={value}
            onClick={() => setEditMode(true)}

          ></StyledTextarea>
        </StyledBox>
      </StyledContainer>
    </>
  );
};

export default FileEditor;
