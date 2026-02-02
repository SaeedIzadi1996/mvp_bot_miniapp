import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [userData, setUserData] = useState(null)
  const [isTelegram, setIsTelegram] = useState(false)

  useEffect(() => {
    // Check if running in Telegram
    if (window.Telegram?.WebApp) {
      const tg = window.Telegram.WebApp
      setIsTelegram(true)
      
      // Expand to full height
      tg.expand()
      
      // Get user data
      const user = tg.initDataUnsafe?.user
      if (user) {
        setUserData({
          id: user.id,
          firstName: user.first_name,
          lastName: user.last_name || '',
          username: user.username || 'No username',
          languageCode: user.language_code || 'N/A'
        })
      }
      
      // Set theme colors
      document.body.style.backgroundColor = tg.backgroundColor
    }
  }, [])

  return (
    <div className="app">
      <h1>🎉 MVP Bot Mini App</h1>
      
      {isTelegram ? (
        <div className="user-info">
          <h2>✅ Running in Telegram</h2>
          {userData ? (
            <div className="user-card">
              <p><strong>User ID:</strong> {userData.id}</p>
              <p><strong>Name:</strong> {userData.firstName} {userData.lastName}</p>
              <p><strong>Username:</strong> @{userData.username}</p>
              <p><strong>Language:</strong> {userData.languageCode}</p>
            </div>
          ) : (
            <p>❌ No user data available</p>
          )}
        </div>
      ) : (
        <div className="warning">
          <h2>⚠️ Not running in Telegram</h2>
          <p>Open this app through your Telegram bot</p>
        </div>
      )}
    </div>
  )
}

export default App
