"use client"

import { useState } from "react"
import "./App.css"
import SchedulingDashboard from "./pages/SchedulingDashboard"
import DisplayPanel from "./pages/DisplayPanel"
import LoginPage from "./pages/LoginPage"

type AppView = "dashboard" | "display"

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [currentUser, setCurrentUser] = useState<string>("")
  const [currentView, setCurrentView] = useState<AppView>("dashboard")

  const handleLogin = (email: string) => {
    setCurrentUser(email)
    setIsAuthenticated(true)
  }

  const handleLogout = () => {
    setIsAuthenticated(false)
    setCurrentUser("")
    setCurrentView("dashboard")
  }

  if (!isAuthenticated) {
    return <LoginPage onLogin={handleLogin} />
  }

  return (
    <div className="app">
      {currentView === "dashboard" && (
        <SchedulingDashboard
          onNavigate={() => setCurrentView("display")}
          onLogout={handleLogout}
          currentUser={currentUser}
        />
      )}
      {currentView === "display" && (
        <DisplayPanel
          onNavigate={() => setCurrentView("dashboard")}
          onLogout={handleLogout}
          currentUser={currentUser}
        />
      )}
    </div>
  )
}

export default App
