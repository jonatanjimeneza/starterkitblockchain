import React, { Component } from 'react';

class NoAuthorized extends Component {

  render() {
    return (
      <div>
        <img src="https://us.123rf.com/450wm/carmenbobo/carmenbobo1507/carmenbobo150700007/41824544-sello-de-goma-con-el-texto-no-autorizado-en-el-interior-ilustraci%C3%B3n-vectorial.jpg" className='Authorized-logo' alt="logo"/>
        <h1>lo siento, no tienes autorización</h1>
        <p>Tu cuenta {this.props.account} no está autorizada a este sitio web.</p>
      </div>
    );
  }
}

export default NoAuthorized;