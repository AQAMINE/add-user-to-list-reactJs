import React from 'react';
import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';

function App() {
  return (
    <div>
      <AddUser/>
      <UsersList users={[{name:'amine', age: 28}]}/> 
    </div>
  );
}

export default App;
