import { Command } from "nexpid-core/commands";
import { fetchImage } from "./fetchImage";

const konoSelf: Command = {
  name: "konoSelf",
  description: "Fetch a random image from KonoChan for yourself.",
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
    const imageUrl = await fetchImage(isNSFW);

    if (!imageUrl) {
      interaction.reply({
        content: "No image found. Try again later.",
        ephemeral: true,
      });
      return;
    }

    interaction.reply({
      content: `Here's your random image: ${imageUrl}`,
      ephemeral: true,
    });
  },
};

export default konoSelf;
