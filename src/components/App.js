import React, { Component } from 'react';
//import logo from '../logo.png';
import './App.css';
import Web3 from 'web3'
import web3 from '../ethereum/web3'
import Authorized from './Authorized';
import NoAuthorized from './NoAuthorized';

class App extends Component {
  async componentWillMount(){
    //Cargar de Web3.0
    await this.loadWeb3()
    //Obtener la info de la cuenta
    await this.infoAccount()
    //chequear autorizados
    await this.checkAuthorization()
  }
  //Cargar la web3.0
  async loadWeb3(){
    if(window.ethereum) {
      window.web3 = new Web3 (window.ethereum);
  try {
      await window.ethereum.request({method: "eth_requestAccounts"})
  } catch(error){
      alert('User denied account access...')
      }
  }
  else {
      alert('Non-Ethereum browser detected. You should trying Metamask!');
  }
  }
  //Obtener la info de la cuenta
  async infoAccount(){
    const web3=window.web3
    const accounts = await web3.eth.getAccounts()
    console.log(accounts)
    console.log("Hola")
    this.setState({account: accounts[0]})
    const balance = await web3.eth.getBalance(accounts[0])
    console.log(balance)
    this.setState({balance:balance})
  }

  //chequear cuentas autorizadas
  async checkAuthorization(){
    const authorizedAccounts = [
      '0x39F097AC203daca4C661dcE04703f8fB5B1FdF38',
      '0x38D2bf894C807e9F95f9197597B9ef0b50489417',
      '0xE5bF6B6FaaCcDd349a0ffD0fFe4dFFcc2F33E30d'
    ]
    const authorized = authorizedAccounts.includes(this.state.account)
    console.log("authorized", authorized)
    this.setState({authorized})
  }

  //Constructor
  constructor(props){
    super(props)
    this.state ={
      account:'',
      balance:'',
      authorized:false
    }
  }
  render() {
    let body

    if(this.state.authorized){
      body = <Authorized account={this.state.account}/>
    }else{
      body = <NoAuthorized account={this.state.account}/>
    }


    return (
      <div>
        <nav className="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">
          <a
            className="navbar-brand col-sm-3 col-md-2 mr-0"
            href="https://www.youtube.com/channel/UCfspyHKd_MkUamR5OFNByfA"
            target="_blank"
            rel="noopener noreferrer"
          >
            DApp
          </a>
          <ul className='navbar-nav-px-3'>
            <li className='nav-item text-nowrap d-none d-sm-non d-sm-block'>
              <small className='text-white'><span id="Account">Account: {this.state.account}</span></small>
            </li>
            <li className='nav-item text-nowrap d-none d-sm-non d-sm-block'>
              <small className='text-white'><span id="Account">Balance: {web3.utils.fromWei(this.state.balance,'ether')} ETH</span></small>
            </li>

          </ul>
        </nav>
        <div className="container-fluid mt-5">
          <div className="row">
            <main role="main" className="col-lg-12 d-flex text-center">
              <div className="content mr-auto ml-auto">
                {body}
              </div>
            </main>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
