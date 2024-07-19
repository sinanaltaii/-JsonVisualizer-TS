interface LogItemRaw {
  t: string ;
  mt: string ;
  x: string ;
  Populator: string;
  WorkItem: string;
  SourceContext: string ;
  ProcessName: string ;
  ThreadId: string ;
  MachineName: string ;
  Log4NetLevel: string ;
}

// When using export line below the other files need the import, otherwise no need for import. WHY?
export default LogItemRaw;