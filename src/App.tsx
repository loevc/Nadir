import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import UserPage from '@/pages/user'
import { TestPlain } from './modules/test/component'
import MakeLovePage from './pages/make_love'

function App() {
  const [count, setCount] = useState(1)

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<>
          <div>
            <a href="https://vite.dev" target="_blank" rel="noopener noreferrer">
              <img src={viteLogo} className="logo" alt="Vite logo" />
            </a>
            <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
              <img src={reactLogo} className="logo react" alt="React logo" />
            </a>
          </div>
          <h1>Vite & React</h1>
          <div className="card">
            <button onClick={() => setCount((count) => count * 2)}>
              count is {count} ?
            </button>
            <p>
              Edit <code>src/App.tsx</code> and save to test HMR
            </p>
          </div>
          <p className="read-the-docs">
            Click on the Vite and React logos to learn more
          </p>
        </>} />
        <Route path="/user" element={<UserPage />} />
        <Route path='/test' element={
          <>
            <TestPlain title='test_name' size={2} render={() => <div style={{ color: 'red' }}>render fx</div>} />
            <TestPlain title='test_name' size={2} render={() => <div style={{ color: 'red' }}>render fx</div>} />
          </>
        } />
        <Route path="/make-love" element={<MakeLovePage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
