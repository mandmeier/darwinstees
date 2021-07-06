import React, {useEffect} from 'react'
// import { HashRouter as Router, Route } from 'react-router-dom'; // HashRouter is for deploy
import { BrowserRouter as Router, Route } from 'react-router-dom'; // BrowserRouter is for dev only
import Home from './pages/Home';
import About from './pages/About';
import NotFound from './pages/NotFound';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import {getIP} from './state/actions/sessionActions'
import {useDispatch} from 'react-redux'


const App = () => {

    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(getIP())
    }, [])

    return (
    <Router>
      <div>
        {/* <Route exact path={"/"} component={Home}/> */}
        <Route exact path="/about" component={About}/>
        <Route exact path="/404" component={NotFound}/>
        <Route exact path="/cart" component={Cart}/>
        <Route exact path="/checkout" component={Checkout}/>
        <Route exact path={["/", "/shop/:urlLineage"]} component={Home}/>
        {/* <Route exact path={["/", "/shop/:urlLineage"]} component={Home}/> */}
      </div>
    </Router>
    )
}

export default App
