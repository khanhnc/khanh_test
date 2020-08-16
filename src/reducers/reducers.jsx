const initialState = {
    isLoggedIn: !!localStorage.getItem("currentUser"),
    currentUser: JSON.parse(localStorage.getItem("currentUser")) || {},
};

const reducers = (state = initialState, action) => {
    switch (action.type) {
        case "LOGIN_USER":
            return { ...state, currentUser: action.payload, isLoggedIn: true };
        case "LOGOUT_USER":
            return { ...state, isLoggedIn: false, currentUser: {} };
        default:
            return state;
    }
}

export default reducers;