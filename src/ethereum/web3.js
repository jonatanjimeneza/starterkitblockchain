import Web3 from "web3";

let web3

if(window.web3) {
    web3 = new Web3(window.web3.currentProvider);
}

window.addEventListener("load", async () => {
    if(window.ethereum) {
        window.web3 = new Web3 (window.ethereum);
    try {
        await window.ethereum.enable();
    } catch(error){
        alert('Usuario no tiene acceso...')
        }
    }
    else if (window.web3) {
        window.web3 = new Web3(web3.currentProvider); 
    }
    else {
        alert('No se ha detectado ningún ETH walet. Instalar Metamask!');
    }

})

export default web3;