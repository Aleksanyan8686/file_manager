import React from "react"
import { MainContainer } from './styles'
import { useSelector } from "react-redux"
import * as _ from 'lodash';
import Folder from "../Folder/index"
import File from "../File/index"
import { Typography } from "@material-ui/core";
import Breadcrumbs from "../BreadCrumbs/index"





const Trash = () => {

  const { trash,openFolder } = useSelector(state => state.foldersData)
  const files = trash.filter(item => item.fileName)
  const folders = trash.filter(item => item.folderName)
 
  return (
    <>
        {/* {openFolder.length ? <Breadcrumbs/>: null} */}
      {!trash.length && <Typography align="center" variant="h3">Trash is empty</Typography>}
      <MainContainer
        container
        direction='row'
        justify='flex-start'
        alignItems='flex-start'>


        {folders.map((itemF, i) => (
          <Folder
            id={itemF?.id}
            index={i}
            folderName={itemF.folderName}
            key={i}
          />
        ))
        }
                {files.map((itemF, i) => (
          <File
            id={itemF?.id}
            index={i}
            fileName={itemF.fileName}
            key={i}
          />
        ))
        }

      </MainContainer>

    </>)

}


export default Trash

