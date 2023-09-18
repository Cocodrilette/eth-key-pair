import { parseArgs } from "./utils/parseArgs.js";
import { genWallet } from "./utils/genWallet.js";

function main() {
  const args = parseArgs();

  if (args["--help"]) {
    //
    logHelp();
    //
  } else if (args["--gen"]) {
    //
    const value = parseInt(args["--gen"], 10);

    if (isNaN(value)) throw new Error("Invalid --gen value");

    for (let index = 0; index < value; index++) {
      genWallet({ log: true });
    }
    //
  } else {
    //
    genWallet({ log: true });
    //
  }
}

main();
