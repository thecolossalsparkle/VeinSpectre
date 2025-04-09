import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-4xl font-bold text-gray-800 mb-8">React + TypeScript + Tailwind CSS</h1>
      <div className="bg-white p-8 rounded-lg shadow-md">
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
          onClick={() => setCount((count) => count + 1)}
        >
          Count is {count}
        </button>
      </div>
    </div>
  )
}

export default App
