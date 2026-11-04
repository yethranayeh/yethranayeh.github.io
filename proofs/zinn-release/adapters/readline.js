import { unsupported } from "./host.js";
export const createInterface = () =>
  unsupported("interactive confirmation, use an upstream --yes option where available");
