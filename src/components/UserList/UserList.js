import './UserList.css';

// UserList component that displays a list of users
const UserList = (props) => {
  return (
    <div className="users">
      {/* Map through the usersToDisplay array and render user details */}
      {props.usersToDisplay.map((user) => (
        <div key={user.id}>
          <ul>{user.userName}</ul>
          <ul>{user.age}</ul>
        </div>
      ))}
    </div>
  );
};

export default UserList;
