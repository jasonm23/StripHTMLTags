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
  });
});
