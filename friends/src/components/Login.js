import React from 'react';

import {axiosWithAuth} from '../utils/axiosWithAuth.js';

class Login extends React.Component {

		state = {
			credentials:{
				username: '',
				password: ''
			},
			isLoading: false
			
		};
	
	
	handleChange = e => {
		this.setState({
			credentials: {
				...this.state.credentials,
				[e.target.name]: e.target.value
				
			}
		});
		
	};

	
	login = e => {
		e.preventDefault();
		axiosWithAuth()
			.post('/login', this.state.credentials)
			.then(res => {
				localStorage.setItem('token',res.data.payload)

			})
			
			.then(err => console.log(err))
	};

	render() {
		return (
			
			<div className='divForm'>
				<h2 className='h2-login'>Enter username and password to log in</h2>
				<form onSubmit={this.login}>

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