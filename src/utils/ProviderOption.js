import React from 'react';
import WalletConnect from "@walletconnect/web3-provider";

const providerOptions = {
    
    binancechainwallet: {
      package: true
    },
    walletconnect: {
      package: WalletConnect, // required
      options: {
        rpc: {
          rpc: "https://data-seed-prebsc-1-s1.binance.org:8545",
          chainId: 97,
          darkMode: false
        },
      }
    }
  }

export default providerOptions