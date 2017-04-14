export default function StripHtmlTagsES6(html) {
  return html.
    replace(/<\/?[^>]*?>/g, '');
};
