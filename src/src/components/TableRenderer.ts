import LogItemModel from "../Models/LogItemModel";

export function RenderTable(list: LogItemModel[]) {

    const table = document.getElementById("data-table") as HTMLTableElement;
    const tbody = table.querySelector("tbody") as HTMLTableSectionElement;
    resetTableIfDataRowsExists(tbody);

    for (let i = 0; i < list.length; i++) {
        const row = document.createElement("tr");

        const logNumberCell = document.createElement("th");
        logNumberCell.textContent = `${i + 1}`;
        row.appendChild(logNumberCell)

        const timeCell = document.createElement("td");
        timeCell.textContent = list[i].time;
        row.appendChild(timeCell);

        const messageTextCell = document.createElement("td");
        messageTextCell.textContent = `${list[i].messageText}`;
        row.appendChild(messageTextCell);

        const exceptionCell = document.createElement("td");
        exceptionCell.textContent = `${list[i].exception}`;
        row.appendChild(exceptionCell)

        const populatorCell = document.createElement("td");
        populatorCell.textContent = `${list[i].populator}`;
        row.appendChild(populatorCell);

        const workItemCell = document.createElement("td");
        workItemCell.textContent = `${list[i].workItem}`;
        row.appendChild(workItemCell);

        const sourceContextCell = document.createElement("td");
        sourceContextCell.className = "sourceContext";
        sourceContextCell.textContent = `${list[i].sourceContext}`;
        row.appendChild(sourceContextCell);

        const processNameCell = document.createElement("td");
        processNameCell.textContent = `${list[i].processName}`;
        row.appendChild(processNameCell);

        const machineNameCell = document.createElement("td");
        machineNameCell.textContent = `${list[i].machineName}`;
        row.appendChild(machineNameCell);

        const log4NetLevelCell = document.createElement("td");
        log4NetLevelCell.textContent = `${list[i].log4NetLevel}`;
        row.appendChild(log4NetLevelCell);

        tbody?.appendChild(row);
    }
}

function resetTableIfDataRowsExists(tbody: HTMLTableSectionElement) {
    if (tbody.hasChildNodes()) {
      tbody.innerHTML = "";
    }
  }
  