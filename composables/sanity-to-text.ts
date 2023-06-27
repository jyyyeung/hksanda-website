const defaults = { nonTextBehavior: "remove" };

export const blocksToText = (blocks, opts = {}) => {
  if (!blocks) {
    return "";
  }
  const options = Object.assign({}, defaults, opts);
  return blocks
    .map((block) => {
      if (block._type !== "block" || !block.children) {
        return options.nonTextBehavior === "remove"
          ? ""
          : `[${block._type} block]`;
      }

      return block.children.map((child) => child.text).join("");
    })
    .join("\n\n");
};

// export const blockTextToTraditional = (blocks, opts = {}) => {
//   if (!blocks) {
//     return "";
//   }
//   const options = Object.assign({}, defaults, opts);
//   return blocks
//     .map((block) => {
//       if (block._type !== "block" || !block.children) {
//         return options.nonTextBehavior === "remove"
//           ? ""
//           : `[${block._type} block]`;
//       }

//       return block.children.map((child) => child.text).join("");
//     })
//     .join("\n\n");
// };
