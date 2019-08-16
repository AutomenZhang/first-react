import React, {Component} from 'react';
import TodoItem from './TodoItem';
import './style.css';
import axios from 'axios';

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: '',
            list: []
        }
        this.handleChangeValue = this.handleChangeValue.bind(this)
        this.handleBtnClick = this.handleBtnClick.bind(this)
    }

    render() {
        // JSX --> JS对象 --> 真实DOM
        return (
            <div>
                {/*这是一个input框*/}
                <label htmlFor="input">输入内容</label>
                <input
                    id='input'
                    type="text"
                    className='input'
                    value={this.state.inputValue}
                    onChange={this.handleChangeValue}
                    ref={(input) => {this.input = input}}
                />
                <button onClick={this.handleBtnClick}>提交</button>
                <ul ref={(ul) => {this.ul = ul}}>
                    {this.state.list.map((item, index) => {
                        return (
                            <div key={index}>
                                <TodoItem conent={item} index={index}
                                          deleteItem={this.handleDeleteItem.bind(this)}/>
                                {/*<li
                            key={index}
                            dangerouslySetInnerHTML={{__html:item}}
                            onClick={this.handleDeleteItem.bind(this,index)}>
                        </li>*/}
                            </div>
                        )
                    })}
                </ul>
            </div>
        )
    }

    componentDidMount(){
        axios.get('./api/test')
            .then((res) => {
                console.log(res);
            })
            .catch(() => {alert('error')})
    }

    handleChangeValue(e) {
        const value = this.input.value
        this.setState(() => ({
            inputValue: value
        }));
    }

    handleBtnClick() {
        this.setState((prevState) => ({
            list: [...prevState.list, prevState.inputValue],
            inputValue: ''
        }),() => {
            console.log(this.ul.querySelectorAll('div').length);
        });
    }

    handleDeleteItem(index) {
        //immutable
        //state 不允许做任何修改·
        this.setState((prevState) => {
            const list = [...prevState.list];
            list.splice(index, 1);
            return {list}
        })
    }
}


export default TodoList;