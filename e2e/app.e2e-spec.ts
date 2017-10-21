import { WebAppPage } from './app.po';

describe('devskilltests App', () => {
  let page: WebAppPage;

  beforeEach(() => {
    page = new WebAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
