import * as _ from 'lodash';
import {
  CREATE_FOLDER,
  SET_FOLDER_NAME,
  CREATE_FILE,
  SET_FILE_NAME,
  DELETE_DATA,
  SAVE_FILE_BODY,
  SET_CHEKED_DATA,
  CHECKED_OPTIONS,
  DELETE_TRASH_DATA,
  OPEN_FOLDER,
  UPDATE_OPEN_FOLDER,
  CLOSE_OPEN_FOLDER,
  OPEN_TRASH_FOLDER,
  RESTORE_DATA,
  CLEAR_CHECKED
} from './actionCreators.js';





export const compare = (arr1, arr2) => {
  let difArr = arr1.filter((x) => !arr2.includes(x.id));

  return difArr;
};



export const findOverall = (arr1, arr2) => {
  let difArr = arr1.filter((x) => arr2.includes(x.id));

  return difArr;
};






let initialState = {
  foldersData: [],
  filesData: [],
  checkedData: [],
  trash: [],
  foldersDataGroped: {},
  filesDataGroped: {},
  openFolder: [],
  breadCrumbs:[]


};

const foldersDataReducer = (state = initialState, action) => {

  switch (action.type) {
    case CREATE_FOLDER: {
      if (state.openFolder.length) {
        action.folder.path = state.openFolder[0].id
      }
      const newFoldersData = [...state.foldersData, action.folder]
      return { ...state, foldersData: newFoldersData };
    }

    case CREATE_FILE: {
      if (state.openFolder.length) {
        action.file.path = state.openFolder[0].id
      }
      const newFilesData = [...state.filesData, action.file]
      return { ...state, filesData: newFilesData };
    }

    case SET_FOLDER_NAME: {
      const newFoldersData = [...state.foldersData]
      newFoldersData.find(item => item.id == action.data.id).folderName = action.data.folderName
      return { ...state, foldersData: newFoldersData };
    }

    case SET_FILE_NAME: {
      const newfilesData = [...state.filesData]
      newfilesData.find(item => item.id == action.data.id).fileName = action.data.fileName
      return { ...state, filesData: newfilesData };
    }

    case SET_CHEKED_DATA: {
      const newCheckedData = [...state.checkedData, action.id];
      return { ...state, checkedData: newCheckedData }
    }

    case CLEAR_CHECKED: {
      console.log("clear")
      const newCheckedData = [...state.checkedData]
      newCheckedData.length=0
      return { ...state, checkedData: newCheckedData }
    }

    case CHECKED_OPTIONS: {
      const newCheckedData = [...state.checkedData]
      newCheckedData.length = 0
      return { ...state, checkedData: newCheckedData }
    }

    case OPEN_FOLDER: {
      const newOpenFolder = state.foldersData.filter(item => item.id == action.id)
      const newBreadCrumbs=[...state.breadCrumbs,...state.foldersData.filter(item=>item.id==action.id)]
      return { ...state, openFolder: newOpenFolder,breadCrumbs:newBreadCrumbs }
    }
    
    case OPEN_TRASH_FOLDER: {
   
      const newOpenFolder = state.trash.filter(item => item.id == action.id)
      const newBreadCrumbs=[...state.breadCrumbs,...state.trash.filter(item=>item.id==action.id)]
      return { ...state, openFolder: newOpenFolder,breadCrumbs:newBreadCrumbs }
    }

    case SAVE_FILE_BODY: {
      const newFilesData = [...state.filesData];
      newFilesData.forEach(function (item, i) {
        if (item.id == action.fileData.id) {
          newFilesData[i].body = action.fileData.value;
        }
      });
      return { ...state, filesData: newFilesData }
    }

    case UPDATE_OPEN_FOLDER: {
      const index = state.breadCrumbs.findIndex(item => item.folderName === action.item.folderName)
      const newBreadCrumbs=[...state.breadCrumbs]
      newBreadCrumbs.length = index + 1
      return {...state,breadCrumbs:newBreadCrumbs}
    }

    case CLOSE_OPEN_FOLDER: {
      const newBreadCrumbs=[...state.breadCrumbs]
      const newOpenFolder=[...state.openFolder]
      newBreadCrumbs.length = 0
      newOpenFolder.length = 0
      return {...state,openFolder:newOpenFolder,breadCrumbs:newBreadCrumbs}
    }

    case DELETE_DATA: {
      const newFoldersData= compare(state.foldersData, state.checkedData);
      const newFilesData = compare(state.filesData, state.checkedData);
      const newBreadCrumbs=[...state.breadCrumbs]
      newBreadCrumbs.length=0
      const newCheckedData = [...state.checkedData];
      const newOpenFolder=compare(state.openFolder,state.checkedData)
      const newTrash = [...state.trash, ...findOverall(state.foldersData, state.checkedData), ...findOverall(state.filesData, state.checkedData)]
      newCheckedData.length = 0;
      return {...state,trash:newTrash,
        checkedData:newCheckedData,
        foldersData:newFoldersData,
        filesData:newFilesData,
        openFolder:newOpenFolder,
        breadCrumbs:newBreadCrumbs

      }
    }

    case DELETE_TRASH_DATA: {
      const newTrash= compare(state.trash, state.checkedData)
      newTrash.length = 0;
      return {...state,trash:newTrash}
    }

    case RESTORE_DATA: {
      const restoreData=findOverall(state.trash,state.checkedData)
      const restoreFolders=restoreData.filter(item=>item.folderName)
      const newFoldersData = [...state.foldersData,...restoreFolders]
      const restoreFiles=restoreData.filter(item=>item.fileName)
      const newFilesData=[...state.filesData,...restoreFiles]
      const newTrash = compare(state.trash, state.checkedData)
      const newCheckedData = [...state.checkedData]
      newCheckedData.length = 0
      return {...state,foldersData:newFoldersData,checkedData:newCheckedData,trash:newTrash,filesData:newFilesData}
    }

    default:
      return state;
  }
};
export default foldersDataReducer;
