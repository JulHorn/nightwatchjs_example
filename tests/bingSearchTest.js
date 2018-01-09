import { Selector } from 'testcafe'
import config from '../config'

import BingSearchPage from '../pages/bingSearchPage'
import BingResultPage from '../pages/bingResultsPage'
import BingRPage from '../pages/bingResultPage'

const BingSearch = new BingSearchPage();
const BingResults = new BingResultPage();
const BingResult = new BingRPage();

fixture `Bing Tests`
    .page(config.baseUrl);

test('Bing Search Success', async t => {
    await BingSearch.search(t, config.search.term);
    await BingResults.openResult(t, 0);
    await t.expect(BingResult.isOnPage(t)).ok()
});

test('Bing Search Failure', async t => {
    await BingSearch.search(t, config.search.term);
    await BingResults.openResult(t, 0);
    await t.expect(!BingResult.isOnPage(t)).ok();
});