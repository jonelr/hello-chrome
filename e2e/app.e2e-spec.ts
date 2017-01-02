import { HelloChromePage } from './app.po';

describe('hello-chrome App', function() {
  let page: HelloChromePage;

  beforeEach(() => {
    page = new HelloChromePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
