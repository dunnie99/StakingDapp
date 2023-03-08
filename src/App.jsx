import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { DefaultLayout } from './Layout/DefaultLayout';
import  './index.css' 
import { Home } from './pages/Home';
import '@rainbow-me/rainbowkit/styles.css';
import {
  getDefaultWallets,
  RainbowKitProvider,
} from '@rainbow-me/rainbowkit';
import { configureChains, createClient, WagmiConfig } from 'wagmi';
import { goerli, sepolia} from 'wagmi/chains';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from 'wagmi/providers/public';
import { TokenDashboard } from './pages/TokenDashboard';
const { chains, provider } = configureChains(
  [goerli, sepolia],
  [
    alchemyProvider({ apiKey: process.env.ALCHEMY_ID }),
    publicProvider()
  ]
);
const { connectors } = getDefaultWallets({
  appName: 'My RainbowKit App',
  chains
});
const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider
})

export const App = () => {
  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider chains={chains}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DefaultLayout />} />
          <Route index element={<Home />} />
          <Route path="/token" element={<TokenDashboard />} />
          {/* <Route path="/wise" element={} /> */}
        </Routes>
      </BrowserRouter>
      </RainbowKitProvider>
    </WagmiConfig>
  )
}