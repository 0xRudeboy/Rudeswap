import { Goerli } from "@usedapp/core";

// export const ROUTER_ADDRESS = "0x6E71cfbc04eF15db5CcB942f2e4C78efCDD02833";

export const ROUTER_ADDRESS = "0x390eF8A23c8EeB1B9c3Fa4A270f2767Bdf5a3e86";

export const DAPP_CONFIG = {
  readOnlyChainId: Goerli.chainId,
  readOnlyUrls: {
    [Goerli.chainId]:
      "https://eth-goerli.g.alchemy.com/v2/VFVeT3J9yUX9SZs4FStpZUZSJyIUolda",
  },
};
