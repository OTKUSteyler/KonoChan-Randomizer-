import { Command } from "nexpid-core/commands";
import { fetchImage } from "./fetchImage";

const konoSend: Command = {
  name: "konoSend",
  description: "Fetch a random image from KonoChan and send it to the channel.",
  options: [
    {
      name: "nsfw",
      type: "BOOLEAN",
      description: "Include NSFW content?",
      required: false,
    },
  ],
  async execute({ args, interaction }): Promise<void> {
    const isNSFW = args?.nsfw || false;

    // Check if NSFW images are allowed in the channel
    if (isNSFW && !interaction.channel.nsfw) {
      interaction.reply({
        content: "This channel is not marked as NSFW. Use an NSFW channel instead.",
        ephemeral: true,
      });
      return;
    }

    const imageUrl = await fetchImage(isNSFW);

    if (!imageUrl) {
      interaction.reply({
        content: "No image found. Try again later.",
      });
      return;
    }

    interaction.reply({
      content: `Here's your random image: ${imageUrl}`,
    });
  },
};

export default konoSend;
