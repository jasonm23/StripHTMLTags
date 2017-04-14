import { stripHTMLTags } from '../index.js';

describe('StripTags', () => {
  describe('Remove HTML tags', () => {
    it('strips simple HTML tags', () => {
      let html = '<p>This is simple <em>HTML</em> with <strong>nested</strong> <span class="styled with classes">tags</span></p>';
      expect(stripHTMLTags(html)).toEqual('This is simple HTML with nested tags');
    });

    it('replaces br tags with space', () => {
      let html = 'I<BR  />have<BR >some<br>line<br/>breaks<BR>you see?';
      let expected = 'I have some line breaks you see?';
      expect(stripHTMLTags(html)).toEqual(expected);
    });

    it('Should remove script tags and their content', () => {
      let html = '<script> function form() { return 1 + 1; } </SCRIPT><p>Hello there</p>';
      let expected = 'Hello there';
      expect(stripHTMLTags(html)).toEqual(expected);
    });

    it('Should remove style tags and their content', () => {
      let html = '<style> body { color: white; }</style><p>Hello there</p>';
      let expected = 'Hello there';
      expect(stripHTMLTags(html)).toEqual(expected);
    });

    it('should remove <head> tags and all their content', () => {
      let html = '<html><head><!-- comment --><title>Page Title</title><script>functon(){}</script><style>body {color: black;}</style></head><body><p>Hello there</p></body></html>';
      let expected = 'Hello there';
      expect(stripHTMLTags(html)).toEqual(expected);
    });

    it('should not remove content that has a less than < or greater than in text >', () => {
      let html = '<p>This is simple <em>HTML</em> with <strong>text that has < and ></strong> <span class="styled with classes">tags</span></p>';
      let expected = 'This is simple HTML with text that has < and > tags';
      expect(stripHTMLTags(html)).toEqual(expected);
    });
  });
});
