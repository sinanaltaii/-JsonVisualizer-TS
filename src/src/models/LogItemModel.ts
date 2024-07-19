interface LogItemModel {
  time: string;
  messageText: string;
  exception: string;
  populator: string;
  workItem: string;
  sourceContext: string;
  processName: string;
  threadId: string;
  machineName: string;
  log4NetLevel: string;
}

export default LogItemModel