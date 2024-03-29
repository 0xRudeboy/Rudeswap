import React from "react";
import { useEthers } from "@usedapp/core";
import styles from "./styles";
import { uniswapLogo } from "./assets";
import { Loader, Exchange, WalletButton } from "./components";

import { usePools } from "./hooks";

const App = () => {
  const { account } = useEthers();

  const [loading, pools] = usePools();

  console.log("Pools", pools);

  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        <header className={styles.header}>
          <img
            src={uniswapLogo}
            className="h-16 w-16 object-contain"
            alt="uniswap logo"
          />
          <WalletButton />
        </header>
        <div className={styles.exchangeContainer}>
          <h1 className={styles.headTitle}>Uniswap 2.0</h1>
          <p className={styles.subTitle}>Exchange tokens in seconds</p>

          <div className={styles.exchangeBoxWrapper}>
            <div className={styles.exchangeBox}>
              <div className="pink_gradient" />
              <div className={styles.exchange}>
                {account ? (
                  loading ? (
                    <Loader title="Loading pools, please wait!" />
                  ) : (
                    <Exchange pools={pools} />
                  )
                ) : (
                  <Loader title="Please connect your wallet" />
                )}
              </div>
              <div className="blue_gradient" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
