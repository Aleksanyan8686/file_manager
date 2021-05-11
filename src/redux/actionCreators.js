
export const CREATE_FOLDER = "CREATE_FOLDER"
export const SET_FOLDER_NAME = "SET_FOLDER_NAME"
export const SET_FILE_NAME = 'SET_FILE_NAME';
export const CREATE_FILE = "CREATE_FILE"
export const DELETE_DATA = "DELETE_DATA"
export const SAVE_FILE_BODY = 'SAVE_FILE_BODY'
export const SET_CHEKED_DATA = 'SET_CHEKED_DATA';
export const CHECKED_OPTIONS = "CHECKED_OPTIONS"
export const DELETE_TRASH_DATA="DELETE_TRASH_DATA"
export const OPEN_FOLDER="OPEN_FOLDER"
export const UPDATE_OPEN_FOLDER="UPDATE_OPEN_FOLDER"
export const CLOSE_OPEN_FOLDER="CLOSE_OPEN_FOLDER"
export const OPEN_TRASH_FOLDER="OPEN_TRASH_FOLDER"
export const RESTORE_DATA="RESTORE_DATA"
export const CLEAR_CHECKED="CLEAR_CHECKED"


export const createFolderAC = (folder) => {
  return { type: CREATE_FOLDER, folder: folder }
}
export const setFolderNameAC = (id, folderName) => {
  return { type: SET_FOLDER_NAME, data: { id, folderName} };
};

export const setFileNameAC = (id, fileName) => {
  return { type: SET_FILE_NAME, data: { id, fileName} };
};
export const createFileAC = (file) => {
  return { type: CREATE_FILE, file: file };
};
export const setCheckedDataAC = (id) => {
  return { type: SET_CHEKED_DATA, id: id }
}
export const openTrashFolderAC=(id)=>{
  return {type:OPEN_TRASH_FOLDER,id:id}
}
export const deleteDataAC = (data) => {
  return { type: DELETE_DATA, data: data };
};
export const saveFileBodyAC = (fileData) => {
  return { type: SAVE_FILE_BODY, fileData: fileData };
};
export const checkedOptionsAC = (path) => {
  return { type: CHECKED_OPTIONS,path:path }
}
export const deleteFromTrashAC = (data) => {
  return { type: DELETE_TRASH_DATA, data: data };
};
export const openFolderAC=(id)=>{
  return {type:OPEN_FOLDER,id:id}
}
export const updateFolderOpenAC=(item)=>{
  return {type:UPDATE_OPEN_FOLDER,item:item}
}
export const closeFolderOpenAC=()=>{
  return {type:CLOSE_OPEN_FOLDER}
}
export const restoreDataAC=()=>{
  return {type:RESTORE_DATA}
}
export const clearCheckedDataAC=()=>{
  return {type:CLEAR_CHECKED}
}
