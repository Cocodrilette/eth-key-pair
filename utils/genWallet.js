import { ethers } from "ethers";
import { parseArgs } from "./parseArgs.js";

export function genWallet(
  options = {
    log: true,
  }
) {
  const args = parseArgs();

  let wallet;
  if (args["--salt"]) {
    wallet = ethers.HDNodeWallet.createRandom(args["--salt"]);
  } else {
    wallet = ethers.HDNodeWallet.createRandom();
  }

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
