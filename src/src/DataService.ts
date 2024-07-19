import LogItemModel from "./models/LogItemModel";
import GlobalState from "./GlobalState";
import { isStringEmptyOrNull } from "./guards/StringGuard"

function doSearch(query: string): LogItemModel[] {
    var instance: GlobalState = GlobalState.getInstance();
    const logs: LogItemModel[] = instance.getInitialState();
    if (isStringEmptyOrNull(query))
        return logs;

    const searchResult: LogItemModel[] = logs.filter(
        x => x.messageText.toLowerCase().includes(query.toLowerCase())
            || x.exception.toLowerCase().includes(query.toLowerCase())
            || x.populator.toLowerCase().includes(query.toLowerCase())
            || x.workItem.toLowerCase().includes(query.toLowerCase())
            || x.sourceContext.toLowerCase().includes(query.toLowerCase()));

    return searchResult;
}

export default doSearch;

