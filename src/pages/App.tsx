import React, { Suspense, useEffect, useState } from 'react'
import { HashRouter, Route, Switch } from 'react-router-dom'
import styled from 'styled-components'
import { Button, useWalletModal } from '@pancakeswap-libs/uikit'
// import { Credentials, StringTranslations } from '@crowdin/crowdin-api-client'
import Popups from '../components/Popups'
import Web3ReactManager from '../components/Web3ReactManager'
import AddLiquidity from './AddLiquidity'
import {
  RedirectDuplicateTokenIds,
  RedirectOldAddLiquidityPathStructure,
  RedirectToAddLiquidity,
} from './AddLiquidity/redirects'
import MigrateV1 from './MigrateV1'
import MigrateV1Exchange from './MigrateV1/MigrateV1Exchange'
import RemoveV1Exchange from './MigrateV1/RemoveV1Exchange'
import Pool from './Pool'
import PoolFinder from './PoolFinder'
import LPMigration from './LPMigration'
// import Farm from './Farm'
import RemoveLiquidity from './RemoveLiquidity'
import { RedirectOldRemoveLiquidityPathStructure } from './RemoveLiquidity/redirects'
import Swap from './Swap'
import { RedirectPathToSwapOnly, RedirectToSwap } from './Swap/redirects'
import { EN, allLanguages } from '../constants/localisation/languageCodes'
import { LanguageContext } from '../hooks/LanguageContext'
import { TranslationsContext } from '../hooks/TranslationsContext'
// import TopLabelCard from '../components/TopLabelCard/TopLabelCard'
import Menu from '../components/Menu'
import Header from '../common/header/Header'
import Footer from '../common/footer/Footer'
import MobileFooter from '../common/footer/MobileFooter'
import Banner from '../common/Banner'
import ColorSwitcher from '../elements/switcher/ColorSwitcher'

const AppWrapper = styled.div`
  display: flex;
  flex-flow: column;
  overflow-x: hidden;
`

const BodyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  flex: 1;
  overflow-y: auto;
  overflow-x: hidden;
  z-index: 1;
  background-repeat: no-repeat;
  margin-bottom: 100px;
`

const Marginer = styled.div`
  margin-top: 5rem;
`

export default function App() {
  const [selectedLanguage, setSelectedLanguage] = useState<any>(undefined)
  const [translatedLanguage, setTranslatedLanguage] = useState<any>(undefined)
  const [translations, setTranslations] = useState<Array<any>>([])

  return (
    <Suspense fallback={null}>
      <HashRouter>
        <AppWrapper>
          <LanguageContext.Provider
            value={{ selectedLanguage, setSelectedLanguage, translatedLanguage, setTranslatedLanguage }}
          >
            <TranslationsContext.Provider value={{ translations, setTranslations }}>
              <Header />
              <Banner />
              {/* <ColorSwitcher /> */}
              <BodyWrapper>
                <div style={{ marginBottom: '10rem' }} />
                <Popups />
                <Web3ReactManager>
                  <Switch>
                    <Route exact strict path="/swap" component={Swap} />
                    <Route exact strict path="/swap/:outputCurrency" component={RedirectToSwap} />
                    <Route exact strict path="/send" component={RedirectPathToSwapOnly} />
                    <Route exact strict path="/find" component={PoolFinder} />
                    <Route exact strict path="/pool" component={Pool} />
                    <Route exact strict path="/lpmigration" component={LPMigration} />
                    <Route exact strict path="/create" component={RedirectToAddLiquidity} />
                    <Route exact path="/add" component={AddLiquidity} />
                    <Route exact path="/add/:currencyIdA" component={RedirectOldAddLiquidityPathStructure} />
                    <Route exact path="/add/:currencyIdA/:currencyIdB" component={RedirectDuplicateTokenIds} />
                    <Route exact strict path="/remove/v1/:address" component={RemoveV1Exchange} />
                    <Route exact strict path="/remove/:tokens" component={RedirectOldRemoveLiquidityPathStructure} />
                    <Route exact strict path="/remove/:currencyIdA/:currencyIdB" component={RemoveLiquidity} />
                    <Route exact strict path="/migrate/v1" component={MigrateV1} />
                    <Route exact strict path="/migrate/v1/:address" component={MigrateV1Exchange} />
                    <Route component={RedirectPathToSwapOnly} />
                  </Switch>
                </Web3ReactManager>
                <Marginer />
              </BodyWrapper>
              <MobileFooter />
              <Footer />
            </TranslationsContext.Provider>
          </LanguageContext.Provider>
        </AppWrapper>
      </HashRouter>
    </Suspense>
  )
}
