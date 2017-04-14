export default function StripHtmlTagsES6(html) {
  return html.
    replace(/<br[ ]*\/?>/gi, ' ').
    replace(/<\/?[^>]*?>/g, '');
};
