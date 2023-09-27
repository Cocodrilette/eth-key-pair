import { ethers } from "ethers";

export function genWallet(
  options = {
    log: true,
  }
) {
  const wallet = ethers.Wallet.createRandom();

  const nemonic = wallet.mnemonic;
  const privKey = wallet.privateKey;
  const ethAddress = wallet.address;

  if (options?.log) {
    console.log("\n");
    console.log("Mnemonic:       ", nemonic.phrase);
    console.log("Private Key:    ", privKey);
    console.log("Address:        ", ethAddress);
    console.log("\n");
  }
}
