import Grid from '@material-ui/core/Grid';
import styled from 'styled-components';
import FolderIcon from '@material-ui/icons/Folder';
import InputBase from '@material-ui/core/InputBase';

export const MainContainer = styled(Grid)`
  background-color: #91a7c7;
  height: 100vh!important;
  width: 100%;
`;

export const StyledFolderIcon=styled(FolderIcon)`
  font-size:100px !important;

`
export const Input = styled(InputBase)`
background-color:white;
width:70%!important;
`
