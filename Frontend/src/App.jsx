import { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import InformationComponent from './components/Information';
import AttentionPopup from './components/AttentionPopup';
import TransactionForm from './components/TransactionForm';
import FingerprintJS from '@fingerprintjs/fingerprintjs';
import { use } from 'react';




function App() {
  const [walletConnected, setWalletConnected] = useState(false);
  const [account, setAccount] = useState(null);
  const [fpHash, setFpHash] = useState('');
  const [componentInfo, setComponentInfo] = useState('');
  const [popupClosed, setPopupClosed] = useState(false);

  const toggleWalletConnection = async () => {
    if (!walletConnected) {
      try {
        if (window.ethereum) {
          const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
          setAccount(accounts[0]);
          setWalletConnected(true);
        } else {
          alert("Don't find wallet");
        }
      } catch (err) {
        console.error("Error", err);
      }
    } else {
      setAccount(null);
      setWalletConnected(false);
    }
  };

  const disconnectWallet = () => {
    setAccount(null);
    setWalletConnected(false);
    console.log("Wallet disconected!");
  };

  useEffect(()=>{

  },[]  )

  useEffect(() => {
    if (popupClosed || localStorage.getItem('popupShown') === 'true') {
      const setFp = async () => {
        const agent = await FingerprintJS.load({ debug: true });
        const compon = await agent.getComponents();
        console.log('Fingerprint Components:', compon);
        const allAgentInfo  = await agent.get();
        console.log('Visitor ID:', allAgentInfo.result.visitorId);
        setFpHash(allAgentInfo.result.visitorId);
        setComponentInfo(compon);
      };
      setFp();
    }
  }, [popupClosed]);

  return (
    <>
      <AttentionPopup onClose={() => setPopupClosed(true)} />
      <Header
        walletConnected={walletConnected}
        toggleWalletConnection={toggleWalletConnection}
        disconnectWallet={disconnectWallet}
        account={account}
      />
      <TransactionForm visitorId={fpHash} walletConnected={walletConnected} componentInfo={componentInfo}/>
      <InformationComponent fpHash={fpHash} />
    </>
  );
}

export default App;
