import {
  generateMnemonic,
  mnemonicToSeedSync,
} from "ethereum-cryptography/bip39/index.js";
import { HDKey } from "ethereum-cryptography/hdkey.js";
import { bytesToHex } from "ethereum-cryptography/utils.js";
import { wordlist } from "ethereum-cryptography/bip39/wordlists/english.js";

export function genWallet(options) {
  const mnemonic = generateMnemonic(wordlist, 128);
  const seed = mnemonicToSeedSync(mnemonic);
  const hdKey = HDKey.fromMasterSeed(seed);

  if (options?.log) {
    console.log({
      mnemonic,
      privateKey: `0x${bytesToHex(hdKey.privateKey)}`,
    });
  }

  return { mnemonic, privateKey: `0x${bytesToHex(hdKey.privateKey)}` };
}
