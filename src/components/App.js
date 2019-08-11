import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import '../styles/main.scss';
import Header from './Header';
import Footer from './Footer';
import Container from './Container';
import AddCategory from './AddCategory';

const App = () => {

    return (
        <>
            <Header/>
            <Container>
            <Router>
                <Switch>
                    <Route exact path="/" component={AddCategory}/>
                </Switch>
            </Router>
            </Container>
            
            <Footer/>
        </>
    );
}

export default App;