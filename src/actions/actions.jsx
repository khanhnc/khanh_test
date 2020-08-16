export const fetchUser = user => {
    return dispatch => {
        return fetch("http://localhost:8080/api/authcheck", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
            },
            body: JSON.stringify({ user: { username: user.username, password: user.password } })
    })
            .then(resp => resp.json())
    .then(data => {
        if (data.message) {
            return data;
        } else {
            localStorage.setItem("currentUser", JSON.stringify(data));
            dispatch(loginUser(data));
        }
    })
    }
}

export const logout = () => {
    return dispatch => {
        localStorage.removeItem("currentUser");
        dispatch(logoutUser());
    }
}

const logoutUser = () => ({
    type: 'LOGOUT_USER'
})


const loginUser = user => ({
    type: 'LOGIN_USER',
    payload: user
})
