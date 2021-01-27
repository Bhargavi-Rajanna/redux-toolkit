import React , { useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { addUser , removeUser, selectUser} from './userSlice';

export function User(){
    const [inputValue, setInputValue] = useState('');
    //const users = useSelector((state) => state.user.value);
    const users = useSelector(selectUser);

    console.log(users)

    const dispatch = useDispatch();
  
    return(
        <>
            <button onClick={()=> dispatch(addUser(inputValue))}
            >Add User
            </button>
            
            <input 
             value={inputValue}
             onChange={e => setInputValue(e.target.value)}>
            </input>

            <button onClick={()=> dispatch(removeUser(inputValue))}>Remove User</button>
            {users &&
         
            <ul>
              {users.map((user, index) => <li key={index}>{user}</li> )}  
            </ul>
             }
        </>
    );
}