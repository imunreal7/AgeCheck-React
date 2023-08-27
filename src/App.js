import React, { useState } from 'react';
import AddUser from './components/AddUsers/AddUser/AddUser';
import UserList from './components/UserList/UserList';
import ErrorHandler from './components/AddUsers/ErrorHandler/ErrorHandler';

function App() {
  // State for storing user details and error message
  const [userDetails, setUserDetails] = useState([
    { userName: 'Aman Dubey', age: 24, id: 'g1' },
    { userName: 'Ashok Dubey', age: 52, id: 'g2' },
  ]);
  const [errorMessage, setErrorMessage] = useState('');

  // Handle form validation and update error message
  const validityHandler = (isValid) => {
    if (!isValid) {
      setErrorMessage('Please review the form and correct invalid inputs.');
    } else {
      setErrorMessage('');
    }
  };

  // Handle "Okay" button click to clear error message
  const okayHandler = () => {
    setErrorMessage('');
  };

  // Handle adding a new user
  const addUserHandler = (userInput) => {
    setUserDetails((prevUserDetails) => [
      ...prevUserDetails,
      {
        userName: userInput.username,
        age: userInput.age,
        id: Math.random().toString(),
      },
    ]);
  };

  return (
    <div>
      {/* Components */}
      <AddUser validity={validityHandler} onAddHandler={addUserHandler} />
      <UserList usersToDisplay={userDetails} />
      {errorMessage && (
        <ErrorHandler error={errorMessage} onOkay={okayHandler} />
      )}
    </div>
  );
}

export default App;
