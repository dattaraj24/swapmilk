import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom'
import { ResetCSS } from '@pancakeswap-libs/uikit'
import GlobalStyle from './style/Global'
import App from './pages/App'
import ApplicationUpdater from './state/application/updater'
import ListsUpdater from './state/lists/updater'
import MulticallUpdater from './state/multicall/updater'
import TransactionUpdater from './state/transactions/updater'
import Providers from './Providers'
import 'inter-ui'
import './i18n'
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/scss/app.scss";
import "./assets/scss/style.scss";
import "./assets/scss/responsive.scss";
import "./assets/scss/style-dark.scss";

if ('ethereum' in window) {
  (window.ethereum as any).autoRefreshOnNetworkChange = false
}

window.addEventListener('error', () => { 
   localStorage?.removeItem('redux_localstorage_simple_lists')
})


ReactDOM.render(
  <StrictMode>
    <Providers>
      <>
        <ListsUpdater />
        <ApplicationUpdater />
        <TransactionUpdater />
        <MulticallUpdater />
      </>
      {/* <ResetCSS /> */}
      {/* <GlobalStyle /> */}
      <App />
    </Providers>
  </StrictMode>,
  document.getElementById('root')
)
