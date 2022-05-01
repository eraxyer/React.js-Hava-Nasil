import React, { Component } from 'react';
import Celcius from '../src/components/Celcius';
import Fahrenheit from '../src/components/Fahrenheit';
import Kelvin from '../src/components/Kelvin';


class App extends Component {

  constructor() {
    super();
    this.state = {
      standartCelcius : 0,
      fahrenheit : 32,
      kelvin : 273.1500,
    }
  }


  render() {

    let arttir = () => {
      this.setState({
        standartCelcius : this.state.standartCelcius +1,
        fahrenheit : this.state.standartCelcius * 9/5 + 32,
        kelvin : this.state.standartCelcius + 273.1500,
      })
    }


    return (
      <div className="container-fluid bg-dark vh-100 d-flex align-items-center">
        <div className="text-white container-fluid text-center">

          <div className="fs-1 fw-lighter ">Hava Nasıl?</div>
          <div className='mt-3 fs-3 fw-bolder text-info'>Şu an hava {this.state.standartCelcius} derece</div>

          <button className="btn btn-success mt-5" onClick={()=> arttir()}>Sıcaklık Arttır</button>

          <div className="d-flex row justify-content-around p-5">
            <div className="mt-5 col-lg-3 col-sm-12 fs-4 fst-italic">{this.state.standartCelcius}<Celcius/></div>
            <div className="mt-5 col-lg-3 col-sm-12 fs-4 fst-italic">{this.state.fahrenheit}<Fahrenheit/></div>
            <div className="mt-5 col-lg-3 col-sm-12 fs-4 fst-italic">{this.state.kelvin}<Kelvin/></div>
          </div>

          <p className="mt-5">Coded by Eray ER</p>
        </div>
      </div>
    );
  }
}

export default App;