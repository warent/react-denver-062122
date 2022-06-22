import { useContext } from 'react';
import './App.css';
import UserDetail from './components/UserDetail';
import { UserContext } from './contexts/User';

function App() {
  const { actions: { setProfilePicture, setLoading } } = useContext(UserContext);
  console.log("Updating app");
  return (
    <div className="App">
      <UserDetail />
      <div>
          <button onClick={() => {
            setLoading(true);
            setProfilePicture(`https://picsum.photos/200?t=${Date.now()}`)
          }}>
              Update Profile Picture
          </button>
      </div>
    </div>
  );
}

export default App;
