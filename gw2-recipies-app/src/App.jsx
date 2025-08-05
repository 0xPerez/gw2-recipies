import './App.css'
// import { Routes, Route, Link } from 'react-router-dom';

// import GetRecipie from './GetRecipie'
// import Search from './Search'
// import SearchResult from './SearchResult'

function App() {
  return (
    <>
      <div>
      <h1>Hidersine's Junk Drawer</h1>
      <p>A quick refence/look up tool for GW2 recipies</p>
      </div>

      <div>
        <input
          type="text"
          placeholder="Search the junk drawer"
          // onChnage={}
        />
        <button id="search-button">Search</button>
      </div>


      <Routes>
        <Route path="/SearchResult" element={<SearchResult />} />
        {/* For future use, probably some more crafting features, ROI, WIKI, ETC. */}
      </Routes>

    </>
  )
}

export default App
