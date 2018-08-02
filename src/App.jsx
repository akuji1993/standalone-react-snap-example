import React from 'react'; 
import { Route } from 'react-router-dom'; 
import Page1 from './pages/Page1'; 
import Page2 from './pages/Page2';
import Welcome from './pages/Welcome';  

export default class App extends React.Component {

    render() {
        return (
            <div className="app">
                <Route exact path="/" component={Welcome}/>
                <Route path="/page1" component={Page1}/>
                <Route path="/page2" component={Page2}/>
            </div>
        )
    }
}