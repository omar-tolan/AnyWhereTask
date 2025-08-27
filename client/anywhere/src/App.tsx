
import './App.css'
import LoginPage from './pages/Login'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import RequireAuth from './components/RequireAuth'
import Dashboard from './pages/Dashboard'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route
          path="/"
          element={
            <RequireAuth>
              <Dashboard />
            </RequireAuth>
          }
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App
