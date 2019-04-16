import * as constants from './constants';
import { fromJS} from 'immutable';
import axios from 'axios';
const changeList = (data) => ({
    type:constants.CHANGELIST,
    data:fromJS(data),
    totalPage:Math.ceil(data.lenght / 10)
});
export const input_focused = () => ({
    type:constants.INPUT_FOCUSED
});
export const input_blur = () => ({
    type:constants.INPUT_BLUR
});
export const mouseEnter = () => ({
    type:constants.MOUSE_ENTER
});
export const mouseLeave = () => ({
    type:constants.MOUSE_LEAVE
});
export const  changePage = (page) => ({
    type:constants.CHANGE_PAGE,
    page
})
export const getList = () => {
    return (dispatch) => {
        axios.get('/api/header_list.json').then((res) => {
            const data = res.data;
            dispatch(changeList(data.data));
            console.log(res)
        }).catch(() => {
            console.log("Can't get /");
        });
    }
}