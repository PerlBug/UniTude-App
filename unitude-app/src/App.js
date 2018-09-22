import React, { Component } from 'react';
import Home from './Home';
import TutorSignUp from './TutorSignUp';
import UniSelect from './UniSelect.js';

class App extends Component {
  constructor(){
    super();
    this.state = {
      route: 'home'
    }
  }

  onRouteChange = (route) => {
    this.setState({route: route});
  }

  render() {
    return (
      <div>
        { this.state.route === 'home' &&
          <Home onRouteChange={this.onRouteChange}/>
        }
        {this.state.route === 'uniselect'  &&
          <UniSelect />
        }
        {this.state.route === 'tutorsignup'  &&
          <TutorSignUp />
        }
      </div>

    );
  }
}

export default App;
