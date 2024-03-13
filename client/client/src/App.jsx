import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import AllDecks from './pages/AllDecks'
import CreateDecks from './pages/CreateDecks'
import EditDecks from './pages/EditDecks'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/alldecks' element={<AllDecks />} />
        <Route path='/create' element={<CreateDecks />} />
        <Route path='/edit/:id' element={<EditDecks />} />
      </Routes>
    </>
  )
}

export default App
