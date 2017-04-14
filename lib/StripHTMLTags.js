export default function stripHTMLTags(html) {
  return html.
    replace(/<script.*?<\/script *?>/gi, '').
    replace(/<br[ ]*\/?>/gi, ' ').
    replace(/<\/?[^>]*?>/g, '');
};
