import konoSelf from "./konoSelf";
import konoSend from "./KonoSend";

export const onLoad = () => {
  console.log("[KonoChan Randomizer] Plugin loaded!")
}

export const onUnload = () => {
  konoSelf();
  konoSend();
  console.log("[KonoChan Randomizer] Plugin unloaded!");
}
