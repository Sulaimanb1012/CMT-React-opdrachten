import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './Pages/HomePage.jsx'
import DetailPage from './Pages/DetailPage.jsx'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage />} />
      <Route path="/animal/:id" element={<DetailPage />} />
      </Routes>
     </BrowserRouter>
  )
}

export default App

