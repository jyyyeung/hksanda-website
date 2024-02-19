import MarkdownIt from "markdown-it";

export default defineNuxtPlugin(() => {
  const renderer = MarkdownIt({
    breaks: true,
    xhtmlOut: true,
    html: true,
  });
  return {
    provide: {
      mdRenderer: renderer,
    },
  };
});
