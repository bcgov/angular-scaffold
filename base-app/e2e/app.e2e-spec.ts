import { BaseAppPage } from './app.po';

describe('base-app App', () => {
  let page: BaseAppPage;

  beforeEach(() => {
    page = new BaseAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
