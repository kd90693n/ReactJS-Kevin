import React, { Component } from 'react';
import './App.css';
import Header from "./components/headerComponent/header";
import Body from "./components/mainbodyComponent/body";
import Footer from "./components/footerComponent/footer";


class App extends Component {
  render() {
    return (
      <div className="App">

          <Header />
          <Body />
          <Footer />


      </div>
    );
  }
}

export default App;
