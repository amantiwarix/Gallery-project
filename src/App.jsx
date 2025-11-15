import React from 'react'

const App = () => {

  const data = () =>{
    console.log("data coming")
  }

  return (
    <div className='h-screen p-4 bg-black text-white'>
      <button onClick={data} className='bg-green-600 rounded font-bold text-white px-4 py-2'>Get Data</button>

    </div>
  )
}

export default App
