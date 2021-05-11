import React, { useEffect,useRef } from 'react';
import { MainContainer } from './styles';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Folder from '../Folder/index';
import File from '../File/index';
import Breadcrumbs from "../BreadCrumbs/index"
import {clearCheckedDataAC} from "../../redux/actionCreators"
import Trash from "../Trash/index"

const ChildFolder = ({ setCheckedData }) => {
  const dispatch = useDispatch()
  const location = useLocation();
  const wrapper=useRef(null)

  const { foldersData, filesData, openFolder } = useSelector((state) => state.foldersData)
  const childFolders = foldersData?.filter(item => item.path == location.pathname.slice(1))
  const childFiles = filesData?.filter(item => item.path == location.pathname.slice(1))

  
  useEffect(()=>{
    document.addEventListener("click",function(e){
      if (e.target === wrapper.current) {
        dispatch(clearCheckedDataAC())
      }
    })
    return ()=>{
      document.removeEventListener("click",function(e){
        if (e.target === wrapper.current) {
          dispatch(clearCheckedDataAC())
        }
      })
  
    }
   },[])

   if (location.pathname == "/trash") {
    return <Trash />
  }


 



  return (
    <>

      {openFolder.length ? <Breadcrumbs /> : null}
      <MainContainer
        container
        direction='row'
        justify='flex-start'
        alignItems='flex-start'
        ref={wrapper}
      >
        {childFolders?.map((itemF, i) => (
          <Folder
            key={itemF.id}
            id={itemF?.id}
            index={i}
            folderName={itemF?.folderName}
            setCheckedData={setCheckedData}
          />
        ))
        }
        {childFiles?.map((itemF, i) => (
          <File
            id={itemF?.id}
            index={i}
            fileName={itemF?.fileName}
            setCheckedData={setCheckedData}
          />
        ))
        }
      </MainContainer>
    </>
  );
};

export default ChildFolder;
