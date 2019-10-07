import React, {useState} from 'react';

import {axiosWithAuth} from '../utils/axiosWithAuth.js';





const AddFriend = (props) => {
	
	const [addFriend, setAddFriend] = useState({name: '', age: '', email: ''});
	
	const handleChange = e => {
		setAddFriend({
			...addFriend,
			[e.target.name]: e.target.value
		});
		
	};

	const createFriend = e => {
		e.preventDefault();
		axiosWithAuth()
			.post('/friends', addFriend)
	//calls fetchdata in Friends.js so server can resend update
			.then(res => props.fetchData())
			.then(err => console.log(err))
	};


	return (
		<form className='add-friend' onSubmit={createFriend} >
			<input 
				type='text' 
				name='name'
				placeholder='Enter user name'
				value={addFriend.name}
				onChange={handleChange}
			/>
			<input
				type='text'
				name='age'
				placeholder='Enter age'
				value={addFriend.age}
				onChange={handleChange}
			/>
			<input
				type='text'
				name='email'
				placeholder='Enter email'
				value={addFriend.email}
				onChange={handleChange}
			/>
			<button>Add Friend</button>
		</form>
	);
}
export default AddFriend;