import { NgTwoRetinaPage } from './app.po';

describe('ng-two-retina App', function() {
  let page: NgTwoRetinaPage;

  beforeEach(() => {
    page = new NgTwoRetinaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
