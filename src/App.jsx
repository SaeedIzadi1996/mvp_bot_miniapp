import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1>🎉 MVP Bot Mini App</h1>
      <p>خوش آمدید به سیستم مدیریت مالی</p>
      
      <div style={{ marginTop: '20px' }}>
        <button 
          onClick={() => setCount(count + 1)}
          style={{
            padding: '10px 20px',
            backgroundColor: '#0088cc',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            fontSize: '16px',
            cursor: 'pointer'
          }}
        >
          کلیک کنید: {count}
        </button>
      </div>
    </div>
  )
}

export default App
