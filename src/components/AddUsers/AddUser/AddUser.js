import './AddUser.css';
import Button from '../Button/Button';
import { useState } from 'react';

const AddUser = (props) => {
  // State for user inputs and error messages
  const [enteredUserName, setEnteredUserName] = useState('');
  const [enteredAge, setEnteredAge] = useState(18);
  const [userNameError, setUserNameError] = useState('');
  const [ageError, setAgeError] = useState('');

  // Handle input change for username
  const changeUserNameHandler = (event) => {
    setEnteredUserName(event.target.value);
  };

  // Handle input change for age
  const changeAgeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  // Handle form submission
  const submitHandler = (event) => {
    event.preventDefault();

    let isFormValid = true;

    // Validate username input
    if (!enteredUserName.trim()) {
      setUserNameError('Username is required');
      isFormValid = false;
    } else {
      setUserNameError('');
    }

    // Validate age input
    if (enteredAge < 1 || isNaN(enteredAge) || enteredAge > 120) {
      setAgeError('Age must be a valid number between 1 and 120');
      isFormValid = false;
    } else {
      setAgeError('');
    }

    if (isFormValid) {
      // Call validity handler to update parent component
      props.validity(true);
      const userInput = {
        username: enteredUserName,
        age: enteredAge,
      };
      props.onAddHandler(userInput);
      setEnteredUserName('');
      setEnteredAge(18);
    } else {
      props.validity(false);
    }
  };

  return (
    <form onSubmit={submitHandler} className="input">
      {/* Input fields */}
      <label>UserName</label>
      <input
        type="text"
        onChange={changeUserNameHandler}
        value={enteredUserName}
      />
      {userNameError && <p className="error">{userNameError}</p>}
      <label>Age</label>
      <input type="number" value={enteredAge} onChange={changeAgeHandler} />
      {ageError && <p className="error">{ageError}</p>}
      {/* Submit button */}
      <Button type="submit">Add User</Button>
    </form>
  );
};

export default AddUser;
