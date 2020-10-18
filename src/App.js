import React from 'react';
import Header from './components/Header'
import Main from './components/Main'
import Features from './components/Features';
import Footer from './components/Footer';

import FetchData from './services/FetchData';

import './style.css';

class App extends React.Component
{
  fetchData = new FetchData();

  state = {
    rocket: 'Falcon 9',
    rocketFeatures: null,
    rockets: []
  }

  componentDidMount() {
    this.updateRocketFeatures()
  }
  
  updateRocketFeatures() {
    this.fetchData.getRocket()
    .then(data => {
      this.setState({rockets: data.map(item => item.name)});
      return data;
    })
    .then(data => data.find(item => item.name === this.state.rocket))
    .then(rocket => this.setState({ rocketFeatures: rocket }));
  }

  updateCompany() {
    this.fetchData.getCompanyInfo()
    .then(data => this.setState({companyInfo: data}));
  }

  changeSelectedRocket = rocket => {
    this.setState({
      rocket
    }, this.updateRocketFeatures);
  }

  render(){
    console.log('rocject')
    console.log(this.state.rocketFeatures)
    return (
    <>
      <Header rockets={this.state.rockets} changeSelectedRocket={this.changeSelectedRocket}/>
      <Main rocket={this.state.rocket}/>
      {this.state.rocketFeatures && <Features {...this.state.rocketFeatures}/>}
      <Footer/>      
    </>
    );
  }
}

export default App;
