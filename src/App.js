import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import HeaderBar from './Components/HeaderBar';
import Projects from './Components/Projects';
import About from './About';
import Skills from './Components/Skills';
import FastDetail from './Components/FastDetail';
import {Switch, Route, BrowserRouter as Router} from 'react-router-dom';
import { Container, Col, Row, Button } from 'react-bootstrap';


function App() {
  return (
    <div className="App">
    <Router>
      <HeaderBar />

      <Switch>
            <Route exact path="/puiHW8">
                <About />
            </Route>
            <Route exact path="/puiHW8/projects">
                <Projects />
            </Route>
            <Route exact path="/puiHW8/fastbreak">
                <FastDetail />
            </Route>
            <Route path="/puiHW8/skills">
                <Skills />
            </Route>
            <Route path="*">
              <div> 404 </div>
            </Route>
        </Switch>

    </Router>
    </div>
  );
}

export default App;
