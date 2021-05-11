import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import styled from "styled-components"
import TextField from '@material-ui/core/TextField';


export const StyledContainer = styled(Grid)`
position:fixed;
top:0;
left:0;
height:100%!important;
background-color:rgba(0,0,0,0.5);
width:100%!important;
display:flex;
justify-content:center;
`

export const StyledBox = styled(Box)`
background-color:white;
padding:20px 20px!important;
width:70%;
display:flex;
flex-direction:column!important;
align-items:center!important;
`
export const StyledTextarea = styled(TextField)`
height:100%!important;
padding:20px 20px!important;
`

