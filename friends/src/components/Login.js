import React from 'react';

import {axiosWithAuth} from '../utils/axiosWithAuth.js';

class Login extends React.Component {
	state = {
		credentials:{
			username: '',
			password: ''
		}
	};


	handleChange = e => {
		this.setState({
			credentials: {
				...this.state.credentials,
				[e.target.name]: e.target.vale
			}
		});
	};


	login = e => {
		e.prevenDefault();
	}

	render() {
		return (
			<div className='divForm'>
				<h2 className='h2-login'>Enter username and password to log in</h2>
				<form>

					<input 
						type='text' 
						name='username'
						placeholder='Enter user name'
						value={this.state.credentials.username}
						onChange={this.handleChange}
					/>
					<input
						type='password'
						name='password'
						placeholder='Enter password'
						value={this.state.credentials.password}
						onChange={this.handleChange}
					/>
					<button>Log in</button>
				</form>
			</div>
		)
	}

}

export default Login;