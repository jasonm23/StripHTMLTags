import cheerio from 'cheerio';

export default function stripHTMLTags(html) {
  return cheerio.load(html.
                      replace(/<(script|title|style).*?<\/(script|title|style) *?>/gi, '').
                      replace(/<br[ ]*\/?>/gi, ' '), {
                        normalizeWhitespace: true
                      }).text();
};
