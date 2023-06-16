import React, { useEffect, useState } from 'react'
import { useWeb3React } from '@web3-react/core'
import Web3 from 'web3'
import Web3Modal from 'web3modal'
import { injected, walletconnect } from 'connectors'
import Button from 'react-bootstrap/Button'
import { IoIosLogOut } from "react-icons/io";
import useGetPriceData from 'hooks/useGetPriceData'
import UnlockButton from 'components/ConnectWalletButton'
import Nav from './Nav'
import StickyHeader from './StickyHeader'
// import SwitcherHeader from "../../elements/switcher/SwitcherHeader";
import MobileMenu from './MobileMenu'
import useFetch from '../useFetchMilk' 
import logo from '../../images/logo/logo.webp' 

// eslint-disable-next-line @typescript-eslint/ban-types
const Header: React.FC<{}> = () => {
  const milk: any = useFetch()

  const sticky = StickyHeader(100)
  const { account, activate, deactivate } = useWeb3React()
  const cakePriceUsd = useGetPriceData()

  const connects = async () => {
    const web3Modal = new Web3Modal({
      network: 'mainnet', // optional
      cacheProvider: true,
    })

    const provider = await web3Modal.connect()
    // console.log(provider, "-==-=-=-=-provider=-=-=-=-=-")
    const web3 = new Web3(provider)
    const accounts = await web3.eth.getAccounts()
    if (accounts.length < 0) {
      activate(injected)
    }
  }

  connects()

  const logOut = () => {
    deactivate()
  }

  // useEffect(() => {
  //   onPresentConnectModal()
  // }, [onPresentConnectModal])



  return (
    <>
      <header className="header axil-header header-style-1">
        <div className={`axil-mainmenu ${sticky ? 'axil-sticky' : ''}`}>
          <div className="container">
            <div className="header-navbar">
              <div className="header-logo">
                <div>
                  <img className="light-version-logo" src={logo} width="250px" alt="logo" />
                  <img className="dark-version-logo" src={logo} width="250px" alt="logo" />
                  <img className="sticky-logo" src={logo} width="250px" alt="logo" />
                </div>
                <div className="header-price">${ cakePriceUsd.toFixed(3)}</div>
                {/* <div className="header-price">${parseFloat(milk.current_price).toFixed(3)}</div> */}
              </div>
              <div className="header-main-nav">
                <Nav />
              </div>
              <div className="header-action">
                <ul className="list-unstyled">
                  <li className="mobile-menu-btn sidemenu-btn d-lg-none d-block">
                    {account ? (
                      <div className="d-flex">
                        <span className="account" aria-hidden="true"> {account}   </span>
                        <span onClick={logOut} className="logout" aria-hidden="true">
                          <IoIosLogOut />
                        </span>
                      </div>
                    ) : (
                      <UnlockButton />
                    )}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header
