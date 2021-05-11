import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import styled from 'styled-components';
import InputBase from '@material-ui/core/InputBase';
import DescriptionIcon from '@material-ui/icons/Description';

export const MainContainer = styled(Grid)`
  background-color: #91a7c7;
  height:50vh!important;
  width: 100%;
`;

export const StyledDescriptionIcon = styled(DescriptionIcon)`
  font-size: 100px !important;
`;
export const Input = styled(InputBase)`
  background-color: white;
  width: 70% !important;
`;

export const Name = styled(Box)`
  text-align: center;
`;
