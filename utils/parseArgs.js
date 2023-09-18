export function parseArgs() {
  const rawArgs = process.argv.slice(2);
  const args = {};

  for (const rawArg of rawArgs) {
    const [key, value] = rawArg.split("=");
    args[key] = value;
  }

  return args;
}
