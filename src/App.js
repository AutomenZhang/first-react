import React,{Component} from 'react';
import './App.css';
import { CSSTransition } from 'react-transition-group';

class App extends Component{
    constructor(props){
        super(props);
        this.state= {
            show: true
        }
        this.handlerToggle = this.handlerToggle.bind(this)
    }
    render(){
        return(
            <div>
                <CSSTransition
                    in={this.state.show}
                    timeout={1000}
                >
                    <div>Hello</div>
                </CSSTransition>
                <button onClick={this.handlerToggle}>
                   toggle
                </button>
            </div>
        )

    }
    handlerToggle(){
        this.setState({
            show:this.state.show ? false : true
        })
    }
}

export default App;
