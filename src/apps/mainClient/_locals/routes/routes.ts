import {ShopPage} from './_locals/ShopPage';
import {useHasAccess} from 'domains/customer-access/useHasAccess';
import {Paywall} from 'domains/customer-access/Paywall';
import {Page} from 'domains/layout/Page'

export const Routes = () => {
  hasAccess = useHasAccess()
  <Switch>
    <Route path="/shop">
      <ShopPage />
    </Route>

    <Route path="/articles/">
      {hasAccess? <Article />: <Page><Paywall target="article" /> </Page>} 
    </Route>
  </Switch>
}
