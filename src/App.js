import { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuView: false
    }
  }

  toggleMenu = () => {
    this.setState({ menuView: !this.state.menuView })
  }

  render() {
    return (
      <div className="App" >
        <header className="App-header">
          <div id="header-inner-container">
            <img src="https://startbootstrap.github.io/startbootstrap-agency/assets/img/navbar-logo.svg" alt="logo"></img>
            <nav>
              <ul>
                <li>SERVICES</li>
                <li>PORTFOLIO</li>
                <li>ABOUT</li>
                <li>TEAM</li>
                <li>CONTACT</li>
              </ul>
              <div id="header-menu-button" onClick={this.toggleMenu}>MENU</div>
            </nav>
          </div>
        </header>
      </div>
    );
  }
}

export default App;
