import './App.css'
import Home from './components/Home'
import MyNavbar from './components/MyNavbar'

function App() {
  return (
    <div>
      <MyNavbar branding='Strivestaurant' />
      <Home />
      <Home />
    </div>
  )
}

// <button className='btn btn-danger'>DANGER</button>
// the above way still works
// <Button variant='danger'>DANGER</Button>
// but this is more preferred, this way is more "speaking"
export default App
