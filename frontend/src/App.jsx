import { useState } from 'react'
import FormAddFont from './components/FormAddFont'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <FormAddFont></FormAddFont>
    </>
  )
}

export default App
