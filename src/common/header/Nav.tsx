import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import { useWeb3React } from '@web3-react/core'
import { FaAngleDown } from 'react-icons/fa'
import { IoIosLogOut } from "react-icons/io";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { Modal } from "react-bootstrap";
import { MdContentCopy } from "react-icons/md";
import UnlockButton from 'components/ConnectWalletButton'
import bscScanLogo from "../../images/icon/bsc-scan.svg"

// eslint-disable-next-line @typescript-eslint/ban-types
const Nav: React.FC<{}> = () => {
  const [show, setShow] = useState(false);
  const [a, setA] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const { account, activate, deactivate } = useWeb3React()

  const bscScan = `https://bscscan.com/address/${account}`; 

  // console.log(account, 'accoun0navt')

  const logOut = () => {
    deactivate()
  }

  return (
    <nav className="mainmenu-nav">
     <ul className="mainmenu">
        <li>
          <a href="https://milkshakeswap.finance/">Home</a>
        </li>
        <li className="menu-item-has-children">
          <div>
            Trade <FaAngleDown />
          </div>
          <ul className="axil-submenu">
            <li>
              <Link to="/swap">Swap</Link>
            </li>
            <li>
              <Link to="/pool">Pool</Link>
            </li>
          </ul>
        </li>
        <li>
          <a href="https://milkshakeswap.finance/farm">Milking</a>
        </li>
        <li>
          <a href="https://milkshakeswap.finance/pool">Flavour Pool</a> 
        </li>
        <li>
          <a href="https://milkshakeswap.finance/stake">Staking</a>
        </li>
        <li>
          {account ? (
            <div className="d-flex">
              <span className="account" onClick={handleShow} aria-hidden="true">
                {account}
              </span>
              <span onClick={logOut} className="logout"  aria-hidden="true">
                <IoIosLogOut />
              </span>
            </div>
          ) : (
            <UnlockButton />
          )}
        </li>
        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title style={{fontSize:"20px"}}>Account</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="d-flex justify-content-center mt-4">
            <span className="account">{account}</span>
            <CopyToClipboard
              text={account}
              onCopy={() => {
                setA(true);
                setTimeout(() => setA(false), 3000);
              }}
            >
              <MdContentCopy />
            </CopyToClipboard>
            <a href={bscScan} target="_parent"  rel="noreferrer">
              <img
                src={bscScanLogo}
                alt="bsc-scan"
                className="bscscan-img"
              />
            </a>
          </div>
          {a ? ( 
            <div className="copy">
              <span>Copied</span>
            </div>
          ) : (
            ""
          )}
          <div className="text-center mt-5" onClick={logOut} aria-hidden="true">
            Disconnect <IoIosLogOut />
          </div>
        </Modal.Body>
      </Modal>
      </ul>
    </nav>
  )
}

export default Nav
