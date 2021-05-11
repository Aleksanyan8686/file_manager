import Grid from '@material-ui/core/Grid';
import styled from 'styled-components';
import FolderIcon from '@material-ui/icons/Folder';
import InputBase from '@material-ui/core/InputBase';
import Breadcrumbs from '@material-ui/core/Breadcrumbs'
import { Link} from 'react-router-dom';
import Typography from '@material-ui/core/Typography';


export const MainContainer = styled(Grid)`
  background-color: #91a7c7;
  height: 50vh;
  width: 100%;
  padding:20px 20px;
`;

export const StyledFolderIcon = styled(FolderIcon)`
  font-size: 100px !important;
`;
export const Input = styled(InputBase)`
  background-color: white;
  width: 70% !important;
`;
export const  StyledBreadCrumbs=styled(Breadcrumbs)`
background-color:#91a7c7;
padding:0px 30px;
`
export const StyledLink=styled(Link)`
text-decoration:none;
font-size:24px;
color:yellow;
`
export const StyledTypography=styled(Typography)`
font-size:24px;
color:blue;
`
