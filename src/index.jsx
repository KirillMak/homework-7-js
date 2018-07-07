import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header/'
//import './components/Post';


class App extends Component{
    render(){
        return(
            <div>
                <Header />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('app'));