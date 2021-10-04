
import './App.css';
import Home from './components/Home/Home';


import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NotFound from './components/NotFound/NotFound';
import Services from './components/Services/Services';
import About from './components/About/About';
import Header from './components/Header/Header';
import Trainers from './components/Trainers/Trainers';
import ContactUs from './components/ContactUs/ContactUs';





function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path='/home'>
            <Home></Home>
          </Route>
          <Route path="/about">
            <About></About>
          </Route>
          <Route path="/trainers">
            <Trainers></Trainers>
          </Route>


          <Route path="/services">
            <Services></Services>
          </Route>
          <Route path="/contactus">
            <ContactUs></ContactUs>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>

      </Router>
    </div >
  );
}

export default App;
