import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import home from '../../images/icon/home.png'
import trade from '../../images/icon/trade.png'
import farms from '../../images/icon/farms.png'
import pool from '../../images/icon/pool.png'
import lotto from "../../images/icon/lotto.png";
import soon from "../../images/icon/soon.png";

const MobileFooter = () => {
  const [open, setOpen] = useState(false)
  const [openNew, setOpenNew] = useState(false)
  const openHandle = () => {
    setOpen(!open)
    setOpenNew(false)
  }
  const openNewHandle = () => {
    setOpen(false)
    setOpenNew(!openNew)
  }
  return (
    <>
        <nav className="mobile-nav">
        <li className="mobile-nav-li">
          <a href="https://milkshakeswap.finance/" target="_parent" rel="noreferrer">
            <img src={home} alt="home" className="menu-img" />
            <div style={{ fontSize: '8px' }}>Home</div>
          </a>
        </li>
        <li style={{ cursor: 'pointer' }} className="mobile-nav-li">
          <span onClick={openHandle} aria-hidden="true">
            <img src={trade} alt="home" className="menu-img" />
            <div style={{ fontSize: '8px' }}>Trade</div>
          </span>
        </li>
        <li className="mobile-nav-li">
          <a href="https://milkshakeswap.finance/farm" target="_parent" rel="noreferrer">
            <img src={farms} alt="home" className="menu-img" />
            <div style={{ fontSize: '8px' }}>Milking</div>
          </a>
        </li>
        <li className="mobile-nav-li">
          <a href="https://milkshakeswap.finance/pool" target="_parent" rel="noreferrer">
            <img src={pool} alt="home" className="menu-img" />
            <div style={{ fontSize: '8px' }}>Flavour Poll</div>
          </a>
        </li>
        <li className="mobile-nav-li">
        <a href="https://milkshakeswap.finance/stake" target="_parent" rel="noreferrer">
            <img src={lotto} alt="home" className="menu-img" />
            <div style={{ fontSize: "8px" }}>staking</div>
          </a> 
        </li>
        <li style={{ cursor: 'pointer' }} className="mobile-nav-li">
          <span onClick={openNewHandle} aria-hidden="true">
            <img src={soon} alt="home" className="menu-img" />
            <div style={{ fontSize: '8px' }}>coming Soon</div>
          </span>
        </li>
      </nav>
      {open ? (
        <nav className="mobile-nav2">
          <li className="open-li">
            <Link to="/swap">Exchange</Link>
          </li>
          <li className="open-li">
            <Link to="/pool">Liquidity</Link>
          </li>
        </nav>
      ) : (
        ''
      )}

      {openNew ? (
        <nav className="mobile-nav3">
          <li className="open-li">
            <Link to="/launchpad">Launchpad</Link>
          </li>
          <li className="open-li">
            <Link to="/nft-marketplace">NFT MarketPlace</Link>
          </li>
          <li className="open-li">
            <Link to="/m-el-dorado">M El Dorado</Link>
          </li>
        </nav>
      ) : (
        ''
      )}
    </>
  )
}

export default MobileFooter
