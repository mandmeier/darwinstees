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
import PrivacyPolicy from './pages/PrivacyPolicy'
import TermsOfService from './pages/TermsOfService'
import RefundPolicy from './pages/RefundPolicy'
import SizeChart from './pages/SizeChart'


const App = () => {

    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(getIP())
    }, [dispatch])

    return (
    <Router>
      <div>
        {/* <Route exact path={"/"} component={Home}/> */}
        <Route exact path="/about" component={About}/>
        <Route exact path="/404" component={NotFound}/>
        <Route exact path="/cart" component={Cart}/>
        <Route exact path="/checkout" component={Checkout}/>
        <Route exact path="/privacy-policy" component={PrivacyPolicy}/>
        <Route exact path="/terms-of-service" component={TermsOfService}/>
        <Route exact path="/refund-policy" component={RefundPolicy}/>
        <Route exact path="/size-chart" component={SizeChart}/>
        <Route exact path={["/", "/shop/:urlLineage"]} component={Home}/>
        {/* <Route exact path={["/", "/shop/:urlLineage"]} component={Home}/> */}
      </div>
    </Router>
    )
}

export default App
