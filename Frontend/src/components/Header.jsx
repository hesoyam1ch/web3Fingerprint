
import styles from './header.module.css';

export default function Header({ walletConnected, toggleWalletConnection, disconnectWallet, account }) {
  return (
    <div className={styles.header}>
      <h1>Software tool for collecting information about users on the web3 network</h1>

      <button
        className={styles.connectButton}
        onClick={walletConnected ? disconnectWallet : toggleWalletConnection}
      >
        {walletConnected ? `Disconnect Wallet` : "Connect Wallet"}
      </button>
    </div>
  );
}
