import {  handleFileUpload, handleDragAndDrop } from "./handlers/FileUploadHandler.ts"
import handleQuerySearch from "./handlers/SearchHandler.ts";

handleFileUpload();
handleDragAndDrop();

const queryElement: HTMLInputElement = document.getElementById("query") as HTMLInputElement;
const submitSearchButton = document.getElementById("submit") as HTMLInputElement;
submitSearchButton.addEventListener('click', () => handleQuerySearch(queryElement.value));
