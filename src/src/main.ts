import {  handleFileUpload, handleDragAndDrop } from "./Handlers/FileUploadHandler.ts"
import handleQuerySearch from "./Handlers/SearchHandler.ts";

handleFileUpload();
handleDragAndDrop();

const queryElement: HTMLInputElement = document.getElementById("query") as HTMLInputElement;
const submitSearchButton = document.getElementById("submit") as HTMLInputElement;
submitSearchButton.addEventListener('click', () => handleQuerySearch(queryElement.value));
