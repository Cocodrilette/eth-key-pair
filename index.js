#!/usr/bin/env node

import { parseArgs } from "./utils/parseArgs.js";
import { genWallet } from "./utils/genWallet.js";
import { getGenArg } from "./utils/getGenArg.js";

function main() {
  const args = parseArgs();

  if (args["--help"]) {
    //
    logHelp();
    //
  } else if (args["--gen"]) {
    //
    const value = getGenArg(args["--gen"]);

    for (let index = 0; index < value; index++) {
      genWallet();

      if (index < value - 1)
        console.log(
          "======================================================================================================="
        );
    }
    //
  } else {
    //
    genWallet();
    //
  }
}

main();
