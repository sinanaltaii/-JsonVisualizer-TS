import { processTextFromFile } from "../components/ProcessText"

export function handleFileUpload() {
  handleFileSelect()
};

// Function to handle file selection and JSON parsing
function handleFileSelect() {
  const fileInput: HTMLInputElement = document.getElementById("jsonFileInput") as HTMLInputElement;
  fileInput.addEventListener('change', handleFileSelect);

  const file = fileInput.files?.[0];

  if (!file) {
    console.log('No file selected.');
    return;
  }

  // Check if the selected file is a JSON file
  if (file.type !== 'application/json') {
    console.log('Selected file is not a JSON file.');
    return;
  }

  readFile(file);
}

export function handleDragAndDrop() {
  const dropContainer : HTMLLabelElement = document.getElementById("dropcontainer") as HTMLLabelElement;
  dropContainer.addEventListener("dragover", (e) => {
    // prevent default to allow drop
    e.preventDefault();
  }, false)

  dropContainer.addEventListener("dragenter", () => {
    dropContainer.classList.add("drag-active")
  })

  dropContainer.addEventListener("dragleave", () => {
    dropContainer.classList.remove("drag-active")
  })

  dropContainer.addEventListener("drop", (ev) => {
    ev.preventDefault();
    const file: File = ev.dataTransfer?.files?.[0] as File;
    readFile(file);
  });
}

function readFile(file: File) {
  const reader = new FileReader();
  reader.readAsText(file);
  reader.onload = function () {
    try {
      const jsonText: string = reader.result as string;
      processTextFromFile(jsonText);
    } catch (error: any) {
      console.log(error);
    }
  };
}