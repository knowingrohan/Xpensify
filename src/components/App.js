import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import '../styles/main.scss';
import Header from './Header';
import Footer from './Footer';

const App = () => {

    return (
        <>
            <Header/>
            <Router>
                <Switch>
                    {/* <Route exact path="/" component={Home}/> */}
                    <h1>Expensify</h1>
                </Switch>
            </Router>
            <Footer/>
        </>
    );
}

export default App;