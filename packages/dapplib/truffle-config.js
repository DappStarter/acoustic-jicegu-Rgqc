require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture bread tail tragic educate ranch remember essay gloom clinic tail gesture'; 
let testAccounts = [
"0xa4e203383fce82aaf80f5caa39fe4866076e36ddc7d3f89991d10a784dc6e578",
"0xf686496ec17b9c4c5f4b57dcbac33b45222a6d108195ec914266f7bb31e2a3cb",
"0x0e9250ed16915f3d99cb401f80980e360b106dd54d2f4e86537e58c63507e90b",
"0x360c235f4a325c1dcd8b128b10cce713390a33e761638e921903bcf64fee7385",
"0xd1e886958046feb607ae5a80eaf855022e7f754bd13d1a915ea1dead518191c9",
"0x4ea8aa3a7ed2edff27265c47f3adbfc1977cd0009d42d0feb47457e497491f5b",
"0xfed4fa42896d98245086faef23800b97c7f4af4b1313d28f20b6f5e83101ebc8",
"0x8f59fe719f6e323ec48a54ba12e368dad3b255a887d0dcfe3ea5f1fee418e418",
"0x41570985f87cc88f778d8808f11b02c6ce9b1c86b9990b4e995ce92457693f2f",
"0x71300d32af65ef3a81ee7f7c2960d1f5f54bf1e4da9b991f3e4364ec51b81fa0"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

