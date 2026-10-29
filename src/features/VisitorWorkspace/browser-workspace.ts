import { useEffect, useState, useSyncExternalStore } from "react";
import { VisitorWorkspace } from "./workspace";

let workspacePromise: Promise<VisitorWorkspace> | undefined;
export function getWorkspace() {
  workspacePromise ??= VisitorWorkspace.open();
  return workspacePromise;
}

export function useWorkspace() {
  const [workspace, setWorkspace] = useState<VisitorWorkspace>();
  useEffect(() => {
    void getWorkspace().then(setWorkspace);
  }, []);
  useSyncExternalStore(workspace?.subscribe ?? emptySubscribe, workspace?.getVersion ?? zero);
  return workspace;
}
const emptySubscribe = () => () => {};
const zero = () => 0;
