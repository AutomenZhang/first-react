import React from 'react';
import 'antd/dist/antd.css';
import store from './store'
import TodoUI from  './TodoUI';
import {getInputChangeAction, getAddItem,getDelItem,getList} from './store/actionCreators'


class Todo extends React.Component{
    constructor (props){
        super(props);
        this.state = store.getState();
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleStoreChange = this.handleStoreChange.bind(this);
        this.handleBtnClick = this.handleBtnClick.bind(this);
        this.handleClickItem = this.handleClickItem.bind(this);
        store.subscribe(this.handleStoreChange);
    }
    render() {
       return <TodoUI
           inputValue={this.state.inputValue}
           list={this.state.list}
           handleInputChange={this.handleInputChange}
           handleBtnClick={ this.handleBtnClick}
           handleClickItem={this.handleClickItem}
       />
    }

    componentDidMount() {
        const action = getList();
        store.dispatch(action);
    }

    handleInputChange(e){
        const action = getInputChangeAction(e.target.value);
        store.dispatch(action);
    }
    handleStoreChange() {
        this.setState(store.getState());
    }
    handleBtnClick() {
        const action = getAddItem();
        store.dispatch(action);
    }
    handleClickItem(index) {
        const action = getDelItem(index);
        store.dispatch(action);
    }
}

export default Todo;