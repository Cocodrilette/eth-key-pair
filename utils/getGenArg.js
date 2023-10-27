export function getGenArg(arg) {
  const value = parseInt(arg, 10);
  if (isNaN(value)) throw new Error("Invalid --gen value");

  return value;
}
