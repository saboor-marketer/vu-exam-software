import { useState, useEffect } from 'react'
import { Clock, ChevronLeft, ChevronRight, Flag, Send, LogOut } from 'lucide-react'

// Sample questions data
const SAMPLE_QUESTIONS = [
  {
    id: 1,
    question: "What is the primary function of a CPU in a computer system?",
    options: [
      "Store data permanently",
      "Execute instructions and process data",
      "Display output to the user",
      "Connect to the internet"
    ],
    correctAnswer: 1
  },
  {
    id: 2,
    question: "Which of the following is NOT a programming language?",
    options: [
      "Python",
      "Java",
      "HTML",
      "C++"
    ],
    correctAnswer: 2
  },
  {
    id: 3,
    question: "What does RAM stand for?",
    options: [
      "Read Access Memory",
      "Random Access Memory",
      "Run All Memory",
      "Random Application Module"
    ],
    correctAnswer: 1
  },
  {
    id: 4,
    question: "Which data structure follows the LIFO principle?",
    options: [
      "Queue",
      "Array",
      "Stack",
      "Linked List"
    ],
    correctAnswer: 2
  },
  {
    id: 5,
    question: "What is the time complexity of binary search?",
    options: [
      "O(n)",
      "O(n²)",
      "O(log n)",
      "O(1)"
    ],
    correctAnswer: 2
  },
  {
    id: 6,
    question: "Which protocol is used for secure web browsing?",
    options: [
      "HTTP",
      "FTP",
      "HTTPS",
      "SMTP"
    ],
    correctAnswer: 2
  },
  {
    id: 7,
    question: "What is the purpose of an operating system?",
    options: [
      "To run applications",
      "To manage hardware resources",
      "To provide user interface",
      "All of the above"
    ],
    correctAnswer: 3
  },
  {
    id: 8,
    question: "Which of the following is a NoSQL database?",
    options: [
      "MySQL",
      "PostgreSQL",
      "MongoDB",
      "SQLite"
    ],
    correctAnswer: 2
  },
  {
    id: 9,
    question: "What does API stand for?",
    options: [
      "Application Programming Interface",
      "Advanced Program Integration",
      "Automated Protocol Interface",
      "Application Process Integration"
    ],
    correctAnswer: 0
  },
  {
    id: 10,
    question: "Which CSS property is used to change text color?",
    options: [
      "text-style",
      "font-color",
      "color",
      "text-color"
    ],
    correctAnswer: 2
  }
]

function ExamInterface({ studentInfo, onSubmit, onCancel }) {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState({})
  const [markedForReview, setMarkedForReview] = useState([])
  const [timeLeft, setTimeLeft] = useState(60 * 60) // 60 minutes in seconds
  const [showSubmitModal, setShowSubmitModal] = useState(false)

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer)
          handleSubmit()
          return 0
        }
        return prev - 1
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`
  }

  const handleAnswerSelect = (questionId, optionIndex) => {
    setAnswers((prev) => ({
      ...prev,
      [questionId]: optionIndex
    }))
  }

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion((prev) => prev - 1)
    }
  }

  const handleNext = () => {
    if (currentQuestion < SAMPLE_QUESTIONS.length - 1) {
      setCurrentQuestion((prev) => prev + 1)
    }
  }

  const handleMarkForReview = () => {
    setMarkedForReview((prev) => {
      if (prev.includes(currentQuestion)) {
        return prev.filter((q) => q !== currentQuestion)
      }
      return [...prev, currentQuestion]
    })
  }

  const handleQuestionJump = (index) => {
    setCurrentQuestion(index)
  }

  const handleSubmit = () => {
    onSubmit(answers)
  }

  const getAnsweredCount = () => {
    return Object.keys(answers).length
  }

  const currentQ = SAMPLE_QUESTIONS[currentQuestion]

  return (
    <div className="min-h-screen p-4 md:p-6">
      {/* Header */}
      <div className="bg-white rounded-xl shadow-lg p-4 mb-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div>
            <h1 className="text-xl font-bold text-gray-800">Virtual University Exam</h1>
            <p className="text-sm text-gray-600">{studentInfo?.course}</p>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 bg-blue-50 px-4 py-2 rounded-lg">
              <Clock className="w-5 h-5 text-blue-600" />
              <span className="font-mono text-xl font-bold text-blue-800">
                {formatTime(timeLeft)}
              </span>
            </div>
            <button
              onClick={onCancel}
              className="flex items-center gap-2 text-gray-600 hover:text-red-600 transition"
            >
              <LogOut className="w-5 h-5" />
              <span className="hidden md:inline">Exit</span>
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-6">
        {/* Main Question Area */}
        <div className="flex-1">
          <div className="bg-white rounded-xl shadow-lg p-6">
            {/* Question Header */}
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-lg font-semibold text-gray-800">
                Question {currentQuestion + 1} of {SAMPLE_QUESTIONS.length}
              </h2>
              <button
                onClick={handleMarkForReview}
                className={`flex items-center gap-2 px-3 py-1.5 rounded-lg transition ${
                  markedForReview.includes(currentQuestion)
                    ? 'bg-amber-100 text-amber-700 border border-amber-300'
                    : 'bg-gray-100 text-gray-600 hover:bg-amber-50 hover:text-amber-600'
                }`}
              >
                <Flag className={`w-4 h-4 ${markedForReview.includes(currentQuestion) ? 'fill-current' : ''}`} />
                {markedForReview.includes(currentQuestion) ? 'Marked' : 'Mark for Review'}
              </button>
            </div>

            {/* Question */}
            <div className="mb-8">
              <p className="text-lg text-gray-800 leading-relaxed">{currentQ.question}</p>
            </div>

            {/* Options */}
            <div className="space-y-3">
              {currentQ.options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswerSelect(currentQ.id, index)}
                  className={`w-full text-left p-4 rounded-lg border-2 transition ${
                    answers[currentQ.id] === index
                      ? 'border-blue-500 bg-blue-50'
                      : 'border-gray-200 hover:border-blue-300 hover:bg-blue-50/50'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                      answers[currentQ.id] === index
                        ? 'border-blue-500 bg-blue-500'
                        : 'border-gray-300'
                    }`}>
                      {answers[currentQ.id] === index && (
                        <div className="w-2.5 h-2.5 rounded-full bg-white" />
                      )}
                    </div>
                    <span className="text-gray-700">{option}</span>
                  </div>
                </button>
              ))}
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-between items-center mt-8 pt-6 border-t">
              <button
                onClick={handlePrevious}
                disabled={currentQuestion === 0}
                className="flex items-center gap-2 px-6 py-2.5 rounded-lg bg-gray-100 hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed transition font-medium"
              >
                <ChevronLeft className="w-5 h-5" />
                Previous
              </button>

              <div className="flex gap-3">
                {currentQuestion === SAMPLE_QUESTIONS.length - 1 ? (
                  <button
                    onClick={() => setShowSubmitModal(true)}
                    className="flex items-center gap-2 px-6 py-2.5 rounded-lg bg-green-600 hover:bg-green-700 text-white transition font-medium shadow-lg hover:shadow-xl"
                  >
                    <Send className="w-5 h-5" />
                    Submit Exam
                  </button>
                ) : (
                  <button
                    onClick={handleNext}
                    className="flex items-center gap-2 px-6 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white transition font-medium shadow-lg hover:shadow-xl"
                  >
                    Next
                    <ChevronRight className="w-5 h-5" />
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Question Navigation Panel */}
        <div className="lg:w-80">
          <div className="bg-white rounded-xl shadow-lg p-6 sticky top-6">
            <h3 className="font-semibold text-gray-800 mb-4">Question Navigator</h3>
            
            <div className="grid grid-cols-5 gap-2 mb-6">
              {SAMPLE_QUESTIONS.map((q, index) => {
                const isAnswered = answers[q.id] !== undefined
                const isMarked = markedForReview.includes(index)
                const isCurrent = currentQuestion === index

                return (
                  <button
                    key={q.id}
                    onClick={() => handleQuestionJump(index)}
                    className={`w-10 h-10 rounded-lg font-medium text-sm transition ${
                      isCurrent
                        ? 'bg-blue-600 text-white ring-2 ring-blue-300'
                        : isMarked
                        ? 'bg-amber-100 text-amber-700 border-2 border-amber-400'
                        : isAnswered
                        ? 'bg-green-100 text-green-700 border-2 border-green-400'
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                  >
                    {index + 1}
                  </button>
                )
              })}
            </div>

            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded bg-blue-600" />
                <span className="text-gray-600">Current</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded bg-green-100 border-2 border-green-400" />
                <span className="text-gray-600">Answered</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded bg-amber-100 border-2 border-amber-400" />
                <span className="text-gray-600">Marked for Review</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded bg-gray-100" />
                <span className="text-gray-600">Not Answered</span>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t">
              <div className="flex justify-between text-sm mb-2">
                <span className="text-gray-600">Answered:</span>
                <span className="font-semibold text-green-600">{getAnsweredCount()}/{SAMPLE_QUESTIONS.length}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Marked:</span>
                <span className="font-semibold text-amber-600">{markedForReview.length}</span>
              </div>
            </div>

            <button
              onClick={() => setShowSubmitModal(true)}
              className="w-full mt-6 flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-green-600 hover:bg-green-700 text-white transition font-medium shadow-lg hover:shadow-xl"
            >
              <Send className="w-5 h-5" />
              Submit Exam
            </button>
          </div>
        </div>
      </div>

      {/* Submit Confirmation Modal */}
      {showSubmitModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Submit Exam?</h3>
            
            <div className="space-y-3 mb-6">
              <div className="flex justify-between text-gray-600">
                <span>Total Questions:</span>
                <span className="font-semibold">{SAMPLE_QUESTIONS.length}</span>
              </div>
              <div className="flex justify-between text-gray-600">
                <span>Answered:</span>
                <span className="font-semibold text-green-600">{getAnsweredCount()}</span>
              </div>
              <div className="flex justify-between text-gray-600">
                <span>Not Answered:</span>
                <span className="font-semibold text-red-600">{SAMPLE_QUESTIONS.length - getAnsweredCount()}</span>
              </div>
              <div className="flex justify-between text-gray-600">
                <span>Marked for Review:</span>
                <span className="font-semibold text-amber-600">{markedForReview.length}</span>
              </div>
            </div>

            {getAnsweredCount() < SAMPLE_QUESTIONS.length && (
              <div className="bg-amber-50 border border-amber-200 text-amber-800 px-4 py-3 rounded-lg mb-6 text-sm">
                You have {SAMPLE_QUESTIONS.length - getAnsweredCount()} unanswered questions. Are you sure you want to submit?
              </div>
            )}

            <div className="flex gap-3">
              <button
                onClick={() => setShowSubmitModal(false)}
                className="flex-1 px-4 py-3 border-2 border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition font-medium"
              >
                Continue Exam
              </button>
              <button
                onClick={handleSubmit}
                className="flex-1 px-4 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg transition font-medium"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default ExamInterface
