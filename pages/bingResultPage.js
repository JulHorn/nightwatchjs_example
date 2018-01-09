import { Selector } from 'testcafe'

export default class Page {
  constructor () {
  }

    isOnPage = async (t) => {
      return await Selector('p:nth-child(0)').visible
    }
}
