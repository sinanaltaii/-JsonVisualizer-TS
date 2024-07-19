import LogItemModel from "../models/LogItemModel";
import doSearch from "../DataService"
import { RenderTable } from "../components/TableRenderer";

function handleQuerySearch(query: string) {
    var searchResult: LogItemModel[] = doSearch(query)
    RenderTable(searchResult)
}

export default handleQuerySearch;