const defaults = { nonTextBehavior: "remove" };

export const blocksToText = (blocks: any[], opts = {}) => {
  if (!blocks) {
    return "";
  }
  const options = Object.assign({}, defaults, opts);
  return blocks
    .map((block: { _type: string; children: any[] }) => {
      if (block._type !== "block" || !block.children) {
        return options.nonTextBehavior === "remove"
          ? ""
          : `[${block._type} block]`;
      }

      return block.children.map((child: { text: any }) => child.text).join("");
    })
    .join("\n\n");
};
