import { Angular2TodosAppPage } from './app.po';

describe('angular2-todos-app App', () => {
  let page: Angular2TodosAppPage;

  beforeEach(() => {
    page = new Angular2TodosAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
