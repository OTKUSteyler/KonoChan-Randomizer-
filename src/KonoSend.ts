import { registerCommand } from "@vendetta/commands";
import { findByProps } from "@vendetta/metro";
import { fetchImage } from "./utils";

const { sendBotMessage } = findByProps("sendBotMessage");

let konoSend = registerCommand({
  name: "konoSend",
  displayName: "konoSend",
  description: "Fetch a random image from KonoChan and send it to the channel.",
  displayDescription: "Fetch a random image from KonoChan and send it to the channel.",
  options: [
    {
      name: "nsfw",
      description: "Include NSFW content?",
      type: 5,
      required: false,
      displayName: "nsfw",
      displayDescription: "Include NSFW content?",
    },
  ],
  execute: async function (args, ctx) {
    const options = new Map(args.map((option) => [option.name, option]));
    const isNSFW = options.get("nsfw")?.value || false;

    // Check if NSFW images are allowed in the channel

    const imageUrl = await fetchImage(isNSFW);

    if (!imageUrl) {
      sendBotMessage(ctx.channel.id, "No image found. Try again later.");
      return;
    }

    return {
      content: `Here's your random image: ${imageUrl}`,
    };
  },
  // @ts-ignore
  applicationId: "-1",
  inputType: 1,
  type: 1,
});

export default konoSend;
