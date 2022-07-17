require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'guess nature swift undo name regret soap huge inner process army gas'; 
let testAccounts = [
"0x7bfb764221d4a60306178cda656c8d0a45c48cde2553fb3b397ed24cd508201c",
"0xe078cde046e6996f0ccdfd9153bdd074c5ee12ef387ecbd28d99ea5d1e528149",
"0xcb8673e3e0b65fd293f1c500d9eabe4d81b941f8042cfc30de09b8bda9924b17",
"0xe914432ded32f926c7b1168f0f13dd52b07dc655c546cdace4979ab45df64541",
"0x8af444d3c59dde87bb4c2682f83e585f49225a6ef45c481f2efab6ae8e1bfbf0",
"0xeb59c85750e3cf99a2cd19bfc30bd48945969b9f7273d1b2a8ece5f64ed234d9",
"0xccfccf02a768f1e61572ae3ae30920af57107fc18cf7205c805625ed7d32983c",
"0x9a6f054a569a975d0528cd1c7f315d8d63aa487d36235626be95fe2a73bd22e2",
"0x8593b5963f2ae2fdbc872d6849668ec829b90ae1c52f638035780b75e4b0cacd",
"0x44ddb770ef39f88644939a6718a858957adbd16384201a7f341cd0d06c333ac3"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

