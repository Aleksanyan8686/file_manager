import React, { useEffect, useRef } from 'react';
import { MainContainer } from './styles';
import { useSelector, useDispatch } from "react-redux"
import Folder from "../Folder/index"
import File from "../File/index"
import {clearCheckedDataAC} from "../../redux/actionCreators"




const Main = () => {
  const wrapper = useRef(null)
  const dispatch = useDispatch()

  const { foldersData, filesData } = useSelector((state) => state.foldersData);
  const showedFolders = foldersData?.filter(item => item.path === undefined)
  const showedFiles = filesData?.filter(item => item.path === undefined)


  useEffect(() => {
    document.addEventListener("click", function (e) {
      if (e.target === wrapper.current) {
        dispatch(clearCheckedDataAC())
      }
    })

   return (()=>{
    document.removeEventListener("click", function (e) {
      if (e.target === wrapper.current) {
        dispatch(clearCheckedDataAC())
      }
    })
   })
  }, [])


  return (
    <>
      <MainContainer
        container
        direction='row'
        justify='flex-start'
        alignItems='flex-start'
        ref={wrapper}
      >
        {showedFolders.length
          ? showedFolders.map((itemF, i) => (
            <Folder
              id={itemF?.id}
              folderName={itemF.folderName}

            />
          ))
          : null}
        {showedFiles?.length
          ? showedFiles.map((itemF, i) => (
            <File
              id={itemF?.id}
              fileName={itemF.fileName}

            />
          ))
          : null}
      </MainContainer>

    </>
  );
};

export default Main;
