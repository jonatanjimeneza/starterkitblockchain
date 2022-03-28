import React, { Component } from 'react';

class Authorized extends Component {

  render() {
    return (
      <div>
        <img src="https://thumbs.dreamstime.com/b/sello-de-goma-autorizado-86663838.jpg" className='Authorized-logo' alt="logo"/>
        <h1>Felicidades, tienes Autorización</h1>
        <p>Tu cuenta {this.props.account} está autorizada para acceder a este sitio web.</p>
      </div>
    );
  }
}

export default Authorized;