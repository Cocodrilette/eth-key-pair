# gen-eth-wallet

A simple utitliy to generate a key pair for ethereum

## Installation

```bash
npm install gen-eth-wallet

# or install globally

npm install -g gen-eth-wallet
```

## Usage

### Generate a single wallet

```bash
gen-eth-wallet
```

### Generate multiple wallets

```bash
gen-eth-wallet --gen=<number of wallets>
```

### Generate from salt

```bash
gen-eth-wallet --salt=<salt>

# You can combine this with the --gen flag to generate multiple wallets

gen-eth-wallet --salt=<salt> --gen=<number of wallets>
```
