import { StripHtmlTagsES6 as stripTags } from '../index.js';

describe('StripTags', () => {
  describe('Remove HTML tags', () => {
    it('strips simple HTML tags', () => {
      let html = '<p>This is simple <em>HTML</em> with <strong>nested</strong> <span class="styled with classes">tags</span></p>';
      expect(stripTags(html)).toEqual('This is simple HTML with nested tags');
    });
  });
});
