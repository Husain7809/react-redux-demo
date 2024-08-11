import './App.css'
import React from 'react'
import Counter from './components/Counter'
import { useDispatch } from 'react-redux'

const App = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <span>
        <Counter />
      </span>
      <button style={{ padding: '15px', background: 'green', border: '0', cursor: 'pointer', borderRadius: '5px', marginLeft: '10px', }}
        onClick={e => dispatch({ type: "INCREMENT" })}>
        Increment
      </button>
      <button style={{ padding: '15px', background: 'red', border: '0', cursor: 'pointer', borderRadius: '5px', marginLeft: '10px' }}
        onClick={e => dispatch({ type: "DECREMENT" })}>
        Decrement
      </button>
    </div>
  )
}

export default App
