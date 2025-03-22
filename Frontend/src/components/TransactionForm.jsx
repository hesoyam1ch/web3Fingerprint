import { useState, useEffect } from "react";
import { ethers } from "ethers";
import { Contract } from "ethers";
import hashStorageABI from "../assets/hashStorage.abi.json"
import axios from "axios";

export default function TransactionForm({visitorId,walletConnected,componentInfo }) {
  
 function prepereComponentInfo(data)
 {
  const firstBraceIndex = data.indexOf('{');
  const endMarkerIndex = data.lastIndexOf('```');

  if (firstBraceIndex === -1 || endMarkerIndex === -1 || firstBraceIndex >= endMarkerIndex) {
    return null; 
  }

  return data.slice(firstBraceIndex, endMarkerIndex);
}



  const handleTransaction = async () => {
    if (!window.ethereum) {
      console.error("MetaMask not found");
      return;
    }

    if (!walletConnected) {
      console.error("Wallet not connected");
      return;
    }
    const requiredChainId = 11155111n;

    try {
        const provider = new ethers.BrowserProvider(window.ethereum);
        const signer = await provider.getSigner(); 
        const contract = new Contract("0xaF00a3100B7733bD5be9D76b80f6491545138b75", hashStorageABI, signer);
        const network = await provider.getNetwork();

        
        if(network.chainId != requiredChainId){
                await window.ethereum.request({
                  method: "wallet_switchEthereumChain",
                  params: [{ chainId: ethers.toBeHex(requiredChainId) }],
                });
          
        }
    
        const currentVisitor = "0x" + visitorId;
        //const currentVisitor = "0xd0297eb755c67d19f25621018272367c";

        console.log("hash ", currentVisitor);   
        let componentDto = prepereComponentInfo(componentInfo); 
        const jsonComponent = JSON.parse(componentDto);
        const txData = await contract.storeHash(currentVisitor);
        console.log("builded transacton:", txData);
        

        var responce = await axios.post("http://localhost:5294/api/users/create",{
          visitorId: currentVisitor,
          componentInfo: jsonComponent,
        })

        console.log(responce.status);
        console.log(responce.data);
    } catch (error) {
      console.error("error:", error);
    }
  };

  return (
    <div className="container relative flex flex-col justify-between h-full max-w-6xl px-10 mx-auto xl:px-0 mt-5">
      <h2 className="mb-1 text-3xl font-extrabold leading-tight text-gray-900">Transaction</h2>
      <p className="mb-12 text-lg text-gray-500">Send a transaction securely.</p>

      <div className="w-full flex flex-col sm:flex-row sm:gap-10">
        <div className="w-full sm:w-1/2">
          <div className="relative h-full">
            <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-gray-500 rounded-lg"></span>
            <div className="relative h-full p-5 bg-white border-2 border-gray-500 rounded-lg">
              <h3 className="my-2 ml-3 text-lg font-bold text-gray-800">Make a Transaction</h3>
              <p className="mt-3 mb-1 text-xs font-medium text-green-500 uppercase"></p>
              <button
                type="button"
                onClick={handleTransaction}
                className="w-full px-4 py-2 text-white bg-gradient-to-r from-gray-800 to-black rounded-lg hover:from-gray-900 hover:to-gray-700 disabled:bg-gray-300 disabled:text-gray-600 cursor-pointer"
                disabled={!walletConnected}
            >
                Send Transaction
            </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}