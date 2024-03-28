import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import DeckLists from './pages/DeckLists'
import AllDecks from './pages/AllDecks'
import CreateDecks from './pages/CreateDecks'
import EditDecks from './pages/EditDecks'
import Cards from './pages/Cards'
import MetaReport from './pages/MetaReport'
import SignIn from './pages/SignIn'
import DeckDetails from './components/DeckDetails'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/decklists' element={<DeckLists />}></Route>
        <Route path='/alldecks' element={<AllDecks />} />
        <Route path='/createdecks' element={<CreateDecks />} />
        <Route path='/edit/:id' element={<EditDecks />} />
        <Route path='/cards' element={<Cards />} />
        <Route path='/metareport' element={<MetaReport />} />
        <Route path='/signin' element={<SignIn />} />
        <Route path='/decklists/:deckId' element={<DeckDetails />} />
      </Routes>
    </>
  )
}

export default App
