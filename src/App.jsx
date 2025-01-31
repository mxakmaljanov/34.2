import UserList from './components/UserList';
import users from './assets/data.json'
import './App.css'


function App() {
  // const [count, setCount] = useState(0)


  return (
    <> 
    <div className='wrapper'>
      <UserList users={users}/>
    </div>

    </>
  )
}

export default App
