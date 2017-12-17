import { createStore, combineReducers } from 'redux'

export const setUserInfo = (data) => {
    return {
        type: 'SET_USERINFO',
        data: data
    }
}

export const setFileInfo = (data) => {
    return {
        type: 'SET_FILEINFO',
        data: {}
    }
}

function UserInfo(state = {}, action) {
    console.log('reducer UserInfo ', state);
    if (action.type === 'SET_USERINFO') {
        return action.data;
    }
    return state;
}

function FileInfo(state = {}, action) {
    console.log('reducer FileInfo ', state);
    if (action.type === 'SET_FILEINFO') {
        return action.data;
    }
    return state;
}

const reducers = combineReducers({
    userInfo: UserInfo,
    fileInfo: FileInfo
});

const initStore = {
    userInfo: {
        email: '',
        passwd: ''
    },
    fileInfo: {
        name: ''
    }
}

const store = createStore(reducers, initStore);

export default store;