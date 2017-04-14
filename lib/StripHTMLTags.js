export default function stripHTMLTags(html) {
  return html.
    replace(/<(script|style).*?<\/(script|style) *?>/gi, '').
    replace(/<br[ ]*\/?>/gi, ' ').
    replace(/<\/?[^>]*?>/g, '');
};
