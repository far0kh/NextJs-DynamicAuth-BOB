"use client";

import {
  DynamicContextProvider,
  DynamicWidget,
} from '@dynamic-labs/sdk-react-core';
import {
  createConfig,
  WagmiProvider,
  useAccount,
} from 'wagmi';

export default function Home() {
  // function AccountInfo() {
  //   const { address, isConnected, chain } = useAccount();

  //   return (
  //     <div>
  //       <p>
  //         wagmi connected: {isConnected ? 'true' : 'false'}
  //       </p>
  //       <p>wagmi address: {address}</p>
  //       <p>wagmi network: {chain?.id}</p>
  //     </div>
  //   );
  // };

  return (
    <>
      <DynamicWidget />
      {/* <AccountInfo /> */}
    </>
  );
}
