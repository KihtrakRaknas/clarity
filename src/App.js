import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import Home from './Screens/Home'
import BlogPost from './Screens/BlogPost.js'
import './App.css';
import Feed from './Screens/Feed'
import Authors from './Screens/Authors'
import packageJson from '../package.json';
import About from './Screens/About'
global.appVersion = packageJson.version;

const semverGreaterThan = (versionA, versionB) => {
    const versionsA = versionA.split(/\./g);
  
    const versionsB = versionB.split(/\./g);
    while (versionsA.length || versionsB.length) {
      const a = Number(versionsA.shift());
  
      const b = Number(versionsB.shift());
      // eslint-disable-next-line no-continue
      if (a === b) continue;
      // eslint-disable-next-line no-restricted-globals
      return a > b || isNaN(b);
    }
    return false;
};

export default class App extends React.Component {
    componentDidMount() {
        fetch('https://kihtrak.com/clarity/meta.json')
          .then((response) => {
              console.log(response)
              return response.json()
          })
          .then((meta) => {
            console.log("test")
              console.log("test"+meta)
            const latestVersion = meta.version;
            const currentVersion = global.appVersion;
    
            const shouldForceRefresh = semverGreaterThan(latestVersion, currentVersion);
            if (shouldForceRefresh) {
              console.log(`We have a new version - ${latestVersion}. Should force refresh`);
              console.log('Clearing cache and hard reloading...')
              if (caches) {
                // Service worker cache should be cleared with caches.delete()
                caches.keys().then(function(names) {
                  for (let name of names) caches.delete(name);
                });
              }
              // delete browser cache and hard reload
              window.location.reload(true);
            } else {
              console.log(`You already have the latest version - ${latestVersion}. No cache refresh needed.`);
            }
          }).catch((err)=>console.log(err))
      }
      render(){
        return (
            <Router basename={process.env.PUBLIC_URL}>
                <div>
                    <nav className="navbar sticky-top navbar-expand-lg navbar-dark bg-dark">
                        <Link to="/" style={{color:"white"}} className="navbar-brand"><img src={require('./Images/LoCLogo.svg')} width="25" height="25" alt="A Lack Of Clarity Logo"/> A Lack Of Clarity</Link>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <Link to="/" className="nav-link">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/feed" className="nav-link">Feed</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/about" className="nav-link">About</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/authors" className="nav-link">Authors</Link>
                                </li>
                            </ul>
                        </div>
                    </nav>
        
                {/* A <Switch> looks through its children <Route>s and
                    renders the first one that matches the current URL. */}
                <Switch>
                    <Route exact={true} path="/feed" component = {Feed}/>Authors
                    <Route exact={true} path="/about" component = {About}/>
                    <Route exact={true} path="/authors" component = {Authors}/>
                    <Route path="/:postId" component={BlogPost} />
                    <Route exact={true} path="/" component = {Home}/>
                </Switch>
                </div>
            </Router>
        );
    }
  }
