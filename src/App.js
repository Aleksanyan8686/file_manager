import Main from './components/Main/index';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import BarMenu from './components/BarMenu';
import Trash from "./components/Trash/index"
import { deleteDataAC, deleteFromTrashAC, deleteChildAC } from './redux/actionCreators';
import { Route, useLocation } from "react-router-dom"
import ChildFolder from "./components/ChildFolder/index"
import FileEditor from './components/FileEditor';

function App() {
  
  const location = useLocation()
  const dispatch = useDispatch();
  const checkedData = useSelector(state => state.foldersData.checkedData)

  const deleteData = (data) => {
    if (location.pathname == "/trash") {
      dispatch(deleteFromTrashAC(data))
    } else {
      dispatch(deleteDataAC(data))
    }
  }

  return (
    <>
      <BarMenu deleteData={deleteData} />
      <Route exact path='/'>
        <Main />
      </Route>
      <ChildFolder />
      <Route path="/file"><FileEditor /></Route>
      
    </>
  );
}

export default App;
