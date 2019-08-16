import React, {Component} from 'react';
import PropTypes from 'prop-types';


class TodoItem extends Component {
    constructor(props) {
        super(props);
        //当state或者props改变时，render也会重新执行一次
        this.handlerClick = this.handlerClick.bind(this);
    }

    render() {
        console.log("render");
        const {conent} = this.props;
        return (
            <div onClick={this.handlerClick}>{conent} </div>

        )
    }

    handlerClick() {
        const {deleteItem, index} = this.props;
        deleteItem(index);
    }
}

TodoItem.propTypes = {
    conent: PropTypes.string,
    deleteItem: PropTypes.func,
    index: PropTypes.number,
    test:PropTypes.string.isRequired
}
TodoItem.defaultProps = {
    test:'helloWorld'
}
export default TodoItem;