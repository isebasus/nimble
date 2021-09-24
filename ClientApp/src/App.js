import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link, useLocation} from "react-router-dom";
import BlankDescription from './components/BlankDescription.jsx';
import MerchType from './components/MerchType.js';
import { createBrowserHistory, createHashHistory } from 'history';
import ShoppingCart from './components/ShoppingCart.js';
import { MerchPage } from './components/MerchPage.js';
import './styles/App.css';

function App() {
  return (
    <Router history={createBrowserHistory}>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home}/>                                     
          <Route path={"/choose-merch"} component={ChooseMerch}></Route>
          <Route path={"/los-angeles-apparel"} component={Merch}></Route> 
        </Switch>
      </div>
    </Router>
  );
}

class Home extends React.Component {
  qwerty = () => {
    this.props.history.push('/designer')
  }

  ChooseMerch = () => {
    this.props.history.push('/choose-merch')
  }

  render(){
    return (
      <header className="body">
        <nav>
        <a href="https://github.com/isebasus/"class="logo" id="g" >
          <h1 className="logoText">NIMBLE</h1>
        </a>
         <a href="https://github.com/isebasus/"class="github" id="g" >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="40" height="40" fill="rgb(0,0,0)"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path></svg>
        </a>
        <a href="https://github.com/isebasus/" class="basket" id="g" >
          <a id="text3">1x</a> Basket
        </a>
        </nav>
        <div className="projects">

          <nav className="navBar">
            <a class="navItems">Home</a>
            <a class="navItems">About</a>
            <a class="navItems">Partners</a>
            <a class="navItems">Builder</a>
            <a class="navItems">Order</a>
          </nav>

          <h1 className="first">Made Simple.<a id="text"></a></h1>
          <h2 className="caption">Not your average t-shirt maker. Made for <a id="git" href="https://github.com/isebasus/"><a id="text">Creators</a></a> &amp; <a id="res" href="https://drive.google.com/file/d/1IxqVpsvz8np6-Xaz1NG8KTiRZsLrbzxF/view?usp=sharing"><a id="text2">Artists</a></a> like you.  </h2>
          <a class="button" onClick={this.ChooseMerch}>Make some Merch</a>
        </div>
      </header>
    );
    }
}

export class ChooseMerch extends React.Component {
  static location = Location;
  static history = null;

  constructor(props){
    super(props);
    this.location = props.location;
    this.overrideLocation();
    this.history = this.props.history;
  };

  losAngelesApparel = () => {
    this.props.history.push("/los-angeles-apparel");
  }

  gildanApparel = () => {
    this.props.history.push("/gildan-apparel");
  }

  render() {

    const exactPath = `${this.props.match.path}/`;
    const laPath = `${this.props.match.path}/la-apparel`;
    const gildanPath = `${this.props.match.path}/gildan`;

    return (
        <div className="body">
            <nav>
                <a href="https://github.com/isebasus/" class="logo" id="g" >
                    <h1 className="logoText">NIMBLE</h1>
                </a>
                <a href="https://github.com/isebasus/" class="github" id="g" >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="40" height="40" fill="rgb(0,0,0)"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path></svg>
                </a>
                <a href="https://github.com/isebasus/" class="basket" id="g" >
                  1x Basket
                </a>
            </nav>
            
            <div className="merch">
                <nav className="navBar">
                    <a class="navItems">Home</a>
                    <a class="navItems">About</a>
                    <a class="navItems">Partners</a>
                    <a class="navItems">Builder</a>
                    <a class="navItems">Order</a>
                </nav>

                <h1 className="first">Choose your Blanks<a id="text"></a></h1>
                <div className="columns">
                    <MerchType projectId="laa" path={this.losAngelesApparel} matchPath={laPath} history={this.props.history} quality={<a className="quality"> Best Quality</a>} coverId="coverScraper" name="LOS ANGELES APPAREL"></MerchType>
                    <MerchType projectId="gildan" path={this.gildanApparel} matchPath={gildanPath} history={this.props.history} quality={<a className="quality2"> Best Price</a>} path={this.archive} coverId="coverScraper" name="GILDAN"></MerchType>
                    <MerchType projectId="comfortColors" path={this.videoScraper} coverId="coverScraper"name="COMFORT COLORS"></MerchType>
                    <MerchType projectId="alstyle" path={this.videoScraper} coverId="coverScraper"name="ALSTYLE"></MerchType>
                </div>
            </div>
            <Switch location={this.location}>
                <Route exact path={exactPath} component={this} />
            </Switch>
            <Route path={laPath} component={LosAngelesApparel}/>
            <Route path={gildanPath} component={Gildan}></Route>
        </div>
    );
  }

  overrideLocation() {
    let location = Object.assign({}, this.props.location)
    location.pathname = this.props.match
    this.location = location
  }
}

export class Merch extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const location = this.props.location.pathname;
    switch(location) {
      case '/los-angeles-apparel':
        break;
      case '/gildan':
        // TODO
        break;
      case '/comfort-colors-merch':
        // TODO
        break;
      case '/alstyle':
        // TODO
        break;

    }

    return <MerchPage></MerchPage>
  }

}

export class LosAngelesApparel extends React.Component{
  constructor(props){
    super(props);
  };

  back = () => {
    this.props.history.push('/choose-merch');
  }

  render(){
    return(
      <BlankDescription 
      onClick={this.back} 
      caption="Merch made in the USA." 
      title="Los Angeles Apparel"
      padding="130px"
      imageClass="laaGarments"
      technology1="devicon-python-plain"
      technology2="devicon-html5-plain"
      technology3="devicon-javascript-plain"
      type1="Python"
      type2="HTML5/CSS"
      type3="JavaScript"
      gitLink="https://github.com/ZumbaMaster313/YoutubeWebScraper"
      ></BlankDescription>
    )
  }
}

export class Gildan extends React.Component{
  constructor(props){
    super(props);
  };

  back = () => {
    this.props.history.push('/choose-merch');
  }

  render(){
    return(
      <BlankDescription 
      onClick={this.back} 
      caption="Best priced shirt on the market." 
      title="Gildan"
      padding="130px"
      imageClass="gildanGarments"
      technology1="devicon-python-plain"
      technology2="devicon-html5-plain"
      technology3="devicon-javascript-plain"
      type1="Python"
      type2="HTML5/CSS"
      type3="JavaScript"
      gitLink="https://github.com/ZumbaMaster313/YoutubeWebScraper"
      ></BlankDescription>
    )
  }
}


export default App;
