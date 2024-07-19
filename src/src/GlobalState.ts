import LogItemModel from "./Models/LogItemModel";
import { isNullOrUndefined } from "./Guards/NullOrUndefinedGuard";
class GlobalState {
    private static instance: GlobalState;
    private logsInitialState: LogItemModel[] = [] as LogItemModel[];
    private logsModifiedState: LogItemModel[] = [] as LogItemModel[];

    private constructor() {
    }

    static getInstance() {
        if (isNullOrUndefined(this.instance)) {
            this.instance = new GlobalState();
        }

        return this.instance;
    }

    getInitialState() {
        return this.logsInitialState;
    }

    getCurrentState() {
        return this.logsModifiedState;
    }

    setInitialState(logsInitialState: LogItemModel[]) {
        // this.logsModifiedState = {...this.logsModifiedState, ...newLogsState} // What is this syntax? to tired to google it.
        this.logsInitialState = logsInitialState;
    }

    setCurrentState(newState: LogItemModel[]) {
        this.logsModifiedState = newState;
    }

    resetState() {
        this.logsModifiedState = [] as LogItemModel[];
    }
}

export default GlobalState;
