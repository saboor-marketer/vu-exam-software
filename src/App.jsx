import { useState } from 'react'
import Login from './components/Login'
import Instructions from './components/Instructions'
import ExamInterface from './components/ExamInterface'
import ExamSummary from './components/ExamSummary'

function App() {
  const [currentScreen, setCurrentScreen] = useState('login')
  const [studentInfo, setStudentInfo] = useState(null)
  const [examAnswers, setExamAnswers] = useState({})

  const handleLogin = (info) => {
    setStudentInfo(info)
    setCurrentScreen('instructions')
  }

  const handleStartExam = () => {
    setCurrentScreen('exam')
  }

  const handleSubmitExam = (answers) => {
    setExamAnswers(answers)
    setCurrentScreen('summary')
  }

  const handleBackToLogin = () => {
    setCurrentScreen('login')
    setStudentInfo(null)
    setExamAnswers({})
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100">
      {currentScreen === 'login' && (
        <Login onLogin={handleLogin} />
      )}
      {currentScreen === 'instructions' && (
        <Instructions 
          studentInfo={studentInfo}
          onStartExam={handleStartExam}
          onBack={handleBackToLogin}
        />
      )}
      {currentScreen === 'exam' && (
        <ExamInterface 
          studentInfo={studentInfo}
          onSubmit={handleSubmitExam}
          onCancel={handleBackToLogin}
        />
      )}
      {currentScreen === 'summary' && (
        <ExamSummary 
          studentInfo={studentInfo}
          answers={examAnswers}
          onBackToLogin={handleBackToLogin}
        />
      )}
    </div>
  )
}

export default App
