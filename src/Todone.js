import React,{Component} from 'react'

class Todone extends Component {
    render() {
        return (
            <div>
                <div>
                    <input type="text"/>
                    <button>提交</button>
                </div>
                <ul>
                    <li>张</li>
                    <li>正</li>
                    <li>泉</li>
                </ul>
            </div>
        )

    }
}

export default Todone;