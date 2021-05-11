import React from 'react';
import { StyledBreadCrumbs,StyledLink,StyledTypography } from './styles';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { closeFolderOpenAC, updateFolderOpenAC } from "../../redux/actionCreators"

const Breadcrumbs = () => {

  const history = useHistory()
  const dispatch = useDispatch()

  const {breadCrumbs}=useSelector((state) => state.foldersData)
  const links = breadCrumbs.length > 1 ? [...breadCrumbs].slice(0, -1) : []
  const lastItem = breadCrumbs[breadCrumbs.length - 1]



  function handleClick(item) {
    
    if (item.path !== undefined) {
      dispatch(updateFolderOpenAC(item))
      history.push('/'+item.path)
    } else {
      history.push('/')
      dispatch(closeFolderOpenAC(item))
    }

  }

  return (
    <>
      {breadCrumbs.length ? <StyledBreadCrumbs aria-label="breadcrumb">
        {links?.map(item => {
          return <StyledLink href="#" onClick={() => handleClick(item)}>
            {item.folderName}
          </StyledLink>
        })}

        <StyledTypography >{lastItem.folderName}</StyledTypography>
      </StyledBreadCrumbs> : null}


</>
  );
};

export default Breadcrumbs;
