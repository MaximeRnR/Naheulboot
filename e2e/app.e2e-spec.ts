import { NaheulbootPage } from './app.po';

describe('naheulboot App', () => {
  let page: NaheulbootPage;

  beforeEach(() => {
    page = new NaheulbootPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
