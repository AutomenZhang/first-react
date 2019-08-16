import {CHANGE_INPUT_VALUE,ADD_TO_ITEM, DEL_ITEM_VALUE,INIT_LIST} from './actionTypes'
import axios from "axios";



export const getInputChangeAction = (value) => (
    {
        type:CHANGE_INPUT_VALUE,
        value
    }
);
export const getAddItem = () => (
    {
        type:ADD_TO_ITEM
    }
);
export const getDelItem = (value) => (
    {
        type:DEL_ITEM_VALUE,
        value
    }
);
export const initList = (data) =>(
    {
        type:INIT_LIST,
        data
    }
);
export const getList = () => {
        return (dispatch)=>{
        axios.get('')
            .then((res) =>{
                const action = initList(res.data);
                dispatch(action);
            })
            .catch((err) =>{
                console.log(err);
            });
        }
}