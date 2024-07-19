import { RenderTable } from "./TableRenderer";
import LogItemModel from "../models/LogItemModel";
import LogItemRaw from "../models/LogItemRaw";
import GlobalState from "../GlobalState";
import formatDate from "../DateFomatter";

export function processTextFromFile(text: string) {
    const lines: string[] = splitTextIntoLinesAsArray(text);
    const rawLogLines: LogItemRaw[] = mapToLogItemRawAsArray(lines);
    const logItemModelList: LogItemModel[] = mapToLogItemModlArray(rawLogLines);
    const stateObj: GlobalState = GlobalState.getInstance();
    stateObj.setInitialState(logItemModelList);
    RenderTable(logItemModelList);
}

function splitTextIntoLinesAsArray(text: string): string[] {
    const lines = text.split("\n");
    return lines;
}

function mapToLogItemRawAsArray(logLines: string[]): LogItemRaw[] {
    const list: LogItemRaw[] = [];
    for (let i = 0; i < logLines.length; i++) {
        if (!logLines[i] || logLines.length === 0)
            continue;

        const stripped = logLines[i].replace(/@/g, "")
        const logItemRaw: LogItemRaw = JSON.parse(stripped) as LogItemRaw;
        list.push(logItemRaw);
    }

    return list;
}

function mapToLogItemModlArray(items: LogItemRaw[]): LogItemModel[] {
    const mapped = items.map(item => {
        return <LogItemModel><unknown>{
            time: formatDate(item.t),
            messageText: item.mt ?? "--",
            type: item.t ?? "--",
            exception: item.x ?? "--",
            populator: item.Populator ?? "--",
            workItem: item.WorkItem ?? "--",
            sourceContext: item.SourceContext ?? "--",
            processName: item.ProcessName ?? "--",
            machineName: item.MachineName ?? "--",
            log4NetLevel: item.Log4NetLevel ?? "--"
        };
    });
    return mapped;
}