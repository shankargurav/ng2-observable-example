import { Ng2ObservableExamplePage } from './app.po';

describe('ng2-observable-example App', function() {
  let page: Ng2ObservableExamplePage;

  beforeEach(() => {
    page = new Ng2ObservableExamplePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
