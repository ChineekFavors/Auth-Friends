import React, {useState, useEffect} from 'react';

import {axiosWithAuth} from '../utils/axiosWithAuth.js';

 export const Friends = () => {
 	const [friends, setFriends] = useState([]);
 

 	const fetchData = () => {
 		axiosWithAuth()
 		.get('/friends')
 		.then(res => setFriends(res.data))
 		.then(err => console.log(err))

 	};

 	useEffect(() => {
 		fetchData();
    // Update the document title using the browser API
    
  },[]);
 		
	return (
		<div className='friendsDiv'>
			<h1>Friends List</h1>
			{friends.map(friend => 
				<div className="friend-div" key={friend.id}> 
					<h4>Name: {friend.name}</h4>
					<h4>Age: {friend.age}</h4>
					<h4>Email: {friend.email}</h4>
				</div>
			)}
		</div>
	);
}