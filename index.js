import { registerCommand, unregisterCommand } from "nexpid-core/commands";
import konoSelf from "./commands/konoSelf";
import konoSend from "./commands/konoSend";

export const onLoad = (): void => {
  registerCommand(konoSelf);
  registerCommand(konoSend);
  console.log("[KonoChan Randomizer] Plugin loaded!");
};

export const onUnload = (): void => {
  unregisterCommand("konoSelf");
  unregisterCommand("konoSend");
  console.log("[KonoChan Randomizer] Plugin unloaded!");
};
