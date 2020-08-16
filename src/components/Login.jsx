import React from 'react';
import '../App.scss';
import { fetchUser } from '../actions/actions.jsx'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = { username: '', password: '', errors: {} };
        this.submitLoginForm = this.submitLoginForm.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    static contextTypes = {
        router: PropTypes.object
    };

    onChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }

    submitLoginForm(e) {
        e.preventDefault();
        this.props.fetchUser(this.state).then((res) => {
            if (res?.message) {
                this.setState({ errors: res });
            } else {
                this.props.history.push("/profile");
            }
        })
    }

    render() {
        return (
            <div className="login-container">
                <h3>Login</h3>
                <hr></hr>
                <form className="login-form" onSubmit={this.submitLoginForm}>
                    {
                        this.state.errors?.message &&
                        <div className="alert alert-danger" >
                            {this.state.errors.message}
                        </div>
                    }
                    <div className="form-group">
                        <label >Username:</label>
                        <input name="username" required className="form-control" value={this.state.username}
                            onChange={this.onChange} />
                    </div>
                    <div className="form-group">
                        <label >Password:</label>
                        <input name="password" type="password" required className="form-control" value={this.state.password}
                            onChange={this.onChange} />
                    </div>
                    <button type="submit" className="btn btn-primary" disabled={!this.state.username || !this.state.password}>Login</button>
                </form>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    fetchUser: user => dispatch(fetchUser(user))
})

export default connect(null, mapDispatchToProps)(Login);
