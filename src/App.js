import { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuView: false,
      dropdownHeight: '0px'
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleHeaderScroll)
  }

  handleHeaderScroll() {
    const header = document.getElementById('header')
    // const img = document.getElementById('header-img')
    header.classList.toggle('header-small', window.pageYOffset > 0)
    // img.classList.toggle('img-small', window.pageYOffset > 0)
    // if (window.pageYOffset > 0) {
    //   header.classList.add("header-small")
    //   img.classList.add("img-small")
    // } else {
    //   header.classList.remove("header-small")
    //   img.classList.remove("img-small")
    // }
  }

  toggleMenu = () => {
    const nav = document.getElementById('dropdown-nav')
    nav.classList.toggle('dropdown-nav-open')
    nav.classList.toggle('dropdown-nav-closed')
    // !this.state.menuView
    //   ? this.setState({ dropdownHeight: '190px' })
    //   : this.setState({ dropdownHeight: '0px' })
    // this.setState({ menuView: !this.state.menuView })
  }

  render() {
    return (
      <div className="App" >
        <header id="header" className="App-header">
          <div id="header-inner-container">
            <img id="header-img" src="https://startbootstrap.github.io/startbootstrap-agency/assets/img/navbar-logo.svg" alt="logo"></img>
            <nav id="header-nav">
              <ul>
                <li>SERVICES</li>
                <li>PORTFOLIO</li>
                <li>ABOUT</li>
                <li>TEAM</li>
                <li>CONTACT</li>
              </ul>
              <div id="header-menu-button" onClick={this.toggleMenu}>MENU</div>
            </nav>
            <nav id="dropdown-nav" className="dropdown-nav-closed">
              <ul>
                <li>SERVICES</li>
                <li>PORTFOLIO</li>
                <li>ABOUT</li>
                <li>TEAM</li>
                <li>CONTACT</li>
              </ul>
            </nav>
          </div>
        </header>
        <section id="welcome">
          <h3>Welcome To Our Studio</h3>
          <h2>IT'S NICE TO MEET YOU</h2>
          <div>TELL ME MORE</div>
        </section>
        <section id="services">
          <div id="services-container">
            <h3>SERVICES</h3>
            <p>Lorem ipsum dolor sit amet consectetur.</p>
            <div id="services-bottom">
              <div>
                <div className="service-img-container">
                  <svg className="svg-inline--fa fa-shopping-cart fa-w-18 fa-stack-1x fa-inverse" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="shopping-cart" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" data-fa-i2svg=""><path fill="currentColor" d="M528.12 301.319l47.273-208C578.806 78.301 567.391 64 551.99 64H159.208l-9.166-44.81C147.758 8.021 137.93 0 126.529 0H24C10.745 0 0 10.745 0 24v16c0 13.255 10.745 24 24 24h69.883l70.248 343.435C147.325 417.1 136 435.222 136 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-15.674-6.447-29.835-16.824-40h209.647C430.447 426.165 424 440.326 424 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-22.172-12.888-41.332-31.579-50.405l5.517-24.276c3.413-15.018-8.002-29.319-23.403-29.319H218.117l-6.545-32h293.145c11.206 0 20.92-7.754 23.403-18.681z"></path></svg>
                </div>
                <h4>E-Commerce</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
              </div>
              <div>
                <div className="service-img-container">
                  <svg className="svg-inline--fa fa-laptop fa-w-20 fa-stack-1x fa-inverse" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="laptop" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" data-fa-i2svg=""><path fill="currentColor" d="M624 416H381.54c-.74 19.81-14.71 32-32.74 32H288c-18.69 0-33.02-17.47-32.77-32H16c-8.8 0-16 7.2-16 16v16c0 35.2 28.8 64 64 64h512c35.2 0 64-28.8 64-64v-16c0-8.8-7.2-16-16-16zM576 48c0-26.4-21.6-48-48-48H112C85.6 0 64 21.6 64 48v336h512V48zm-64 272H128V64h384v256z"></path></svg>
                </div>
                <h4>Responsive Design</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
              </div>
              <div>
                <div className="service-img-container">
                  <svg className="svg-inline--fa fa-lock fa-w-14 fa-stack-1x fa-inverse" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="lock" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M400 224h-24v-72C376 68.2 307.8 0 224 0S72 68.2 72 152v72H48c-26.5 0-48 21.5-48 48v192c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V272c0-26.5-21.5-48-48-48zm-104 0H152v-72c0-39.7 32.3-72 72-72s72 32.3 72 72v72z"></path></svg>
                </div>
                <h4>Web Security</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
              </div>
            </div>
          </div>

        </section>
      </div >
    );
  }
}

export default App;
