import { ProjectOshopPage } from './app.po';

describe('project-oshop App', () => {
  let page: ProjectOshopPage;

  beforeEach(() => {
    page = new ProjectOshopPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
