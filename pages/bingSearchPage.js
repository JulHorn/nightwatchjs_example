import { Selector } from 'testcafe'

export default class Page {
  constructor () {
    this.searchField = Selector('#sb_form_q');
    this.searchButton = Selector('#sb_form_go');
  }

    search = async (t, searchTerm) => {
      await t.typeText(this.searchField, searchTerm);
      await t.click(this.searchButton);
    }
}
