import { Selector } from 'testcafe'

export default class Page {
  constructor () {
  }

    openResult = async (t, index) => {
      await t.click('#b_results a:nth-child(' + (index + 1) + ')');
    }
}
