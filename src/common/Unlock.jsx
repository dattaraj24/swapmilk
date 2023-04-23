import React from 'react'
import { Button, useWalletModal } from '@pancakeswap-libs/uikit'
import { useWallet } from '@binance-chain/bsc-use-wallet'

const UnlockButton = (props) => {
  const { connect, reset } = useWallet()
  const { onPresentConnectModal } = useWalletModal(connect, reset)

  return (
    <button type="button" className="btn-connect" onClick={onPresentConnectModal} {...props}>
      Connect
    </button>
  )
}

export default UnlockButton
