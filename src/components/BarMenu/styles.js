import Grid from '@material-ui/core/Grid';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';

export const NavBar = styled(Grid)`
  height: 100px;
  background-color: #0b125e;
  padding: 0px 20px;
`;

export const Basket = styled(Button)`
  flex-grow:1;
  color:white!important;
  background-color:transparent!important;
border:none;
outlined:none;
box-shadow:0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%);
`
export const StyledSVG = styled(DeleteOutlineIcon)`
  color:white!important;
  font-size:54px!important;
`


