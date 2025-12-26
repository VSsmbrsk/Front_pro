import './App.css'
import { useSelector, useDispatch } from 'react-redux'
import { incremented, decremented } from './store/rootReducer.js'

function App() {
  const value = useSelector((state) => state.value)
  const dispatch = useDispatch()

  const handleIncrement = () => {
    dispatch(incremented())
  }

  const handleDecrement = () => {
    dispatch(decremented())
  }

  return (
    <>
      <h1>Counter App</h1>
      <h3>Value: {value}</h3>
      <div className='button__wrapper'>
        <button onClick={handleDecrement}>-</button>
        <button onClick={handleIncrement}>+</button>
      </div>
    </>
  )
}

export default App
