import { CheckCircle, XCircle, ArrowLeft, Download, Award } from 'lucide-react'

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

function ExamSummary({ studentInfo, answers, onBackToLogin }) {
  const calculateScore = () => {
    let correct = 0
    SAMPLE_QUESTIONS.forEach((q) => {
      if (answers[q.id] === q.correctAnswer) {
        correct++
      }
    })
    return {
      correct,
      total: SAMPLE_QUESTIONS.length,
      percentage: Math.round((correct / SAMPLE_QUESTIONS.length) * 100)
    }
  }

  const score = calculateScore()

  const getGrade = (percentage) => {
    if (percentage >= 90) return { grade: 'A+', color: 'text-green-600', bg: 'bg-green-100' }
    if (percentage >= 80) return { grade: 'A', color: 'text-green-600', bg: 'bg-green-100' }
    if (percentage >= 70) return { grade: 'B', color: 'text-blue-600', bg: 'bg-blue-100' }
    if (percentage >= 60) return { grade: 'C', color: 'text-amber-600', bg: 'bg-amber-100' }
    if (percentage >= 50) return { grade: 'D', color: 'text-orange-600', bg: 'bg-orange-100' }
    return { grade: 'F', color: 'text-red-600', bg: 'bg-red-100' }
  }

  const gradeInfo = getGrade(score.percentage)

  return (
    <div className="min-h-screen p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        <button
          onClick={onBackToLogin}
          className="flex items-center gap-2 text-gray-600 hover:text-gray-800 mb-6 transition"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Login
        </button>

        {/* Score Card */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-6">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-600 rounded-full mb-4">
              <Award className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-3xl font-bold text-gray-800 mb-2">Exam Results</h1>
            <p className="text-gray-600">{studentInfo?.course}</p>
            <p className="text-sm text-gray-500 mt-1">Student ID: {studentInfo?.studentId}</p>
          </div>

          <div className="grid grid-cols-3 gap-4 mb-8">
            <div className="text-center p-4 bg-green-50 rounded-xl">
              <div className="text-3xl font-bold text-green-600">{score.correct}</div>
              <div className="text-sm text-green-700">Correct</div>
            </div>
            <div className="text-center p-4 bg-red-50 rounded-xl">
              <div className="text-3xl font-bold text-red-600">{score.total - score.correct}</div>
              <div className="text-sm text-red-700">Incorrect</div>
            </div>
            <div className="text-center p-4 bg-blue-50 rounded-xl">
              <div className="text-3xl font-bold text-blue-600">{score.percentage}%</div>
              <div className="text-sm text-blue-700">Score</div>
            </div>
          </div>

          <div className={`inline-flex items-center justify-center w-24 h-24 rounded-full ${gradeInfo.bg} mb-4`}>
            <span className={`text-4xl font-bold ${gradeInfo.color}`}>{gradeInfo.grade}</span>
          </div>
          <p className="text-center text-gray-600">Your Grade</p>
        </div>

        {/* Detailed Results */}
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <h2 className="text-xl font-bold text-gray-800 mb-6">Detailed Answers</h2>
          
          <div className="space-y-4">
            {SAMPLE_QUESTIONS.map((q, index) => {
              const userAnswer = answers[q.id]
              const isCorrect = userAnswer === q.correctAnswer
              const isUnanswered = userAnswer === undefined

              return (
                <div
                  key={q.id}
                  className={`p-4 rounded-xl border-2 ${
                    isUnanswered
                      ? 'border-gray-200 bg-gray-50'
                      : isCorrect
                      ? 'border-green-200 bg-green-50'
                      : 'border-red-200 bg-red-50'
                  }`}
                >
                  <div className="flex items-start gap-3 mb-3">
                    <div className="flex-shrink-0 mt-0.5">
                      {isUnanswered ? (
                        <div className="w-6 h-6 rounded-full bg-gray-300 flex items-center justify-center">
                          <span className="text-white text-xs font-bold">?</span>
                        </div>
                      ) : isCorrect ? (
                        <CheckCircle className="w-6 h-6 text-green-600" />
                      ) : (
                        <XCircle className="w-6 h-6 text-red-600" />
                      )}
                    </div>
                    <div className="flex-1">
                      <p className="font-medium text-gray-800 mb-1">
                        Q{index + 1}: {q.question}
                      </p>
                    </div>
                  </div>

                  <div className="ml-9 space-y-2">
                    {q.options.map((option, optIndex) => {
                      const isUserAnswer = userAnswer === optIndex
                      const isCorrectAnswer = q.correctAnswer === optIndex

                      return (
                        <div
                          key={optIndex}
                          className={`p-2 rounded-lg text-sm ${
                            isCorrectAnswer
                              ? 'bg-green-200 text-green-800 font-medium'
                              : isUserAnswer && !isCorrect
                              ? 'bg-red-200 text-red-800'
                              : 'text-gray-600'
                          }`}
                        >
                          {option}
                          {isCorrectAnswer && ' ✓ (Correct)'}
                          {isUserAnswer && !isCorrect && ' ✗ (Your Answer)'}
                        </div>
                      )
                    })}
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-6 flex gap-4">
          <button
            onClick={onBackToLogin}
            className="flex-1 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition font-semibold shadow-lg hover:shadow-xl"
          >
            Take Another Exam
          </button>
          <button
            onClick={() => window.print()}
            className="flex items-center justify-center gap-2 px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition font-semibold"
          >
            <Download className="w-5 h-5" />
            Print Results
          </button>
        </div>
      </div>
    </div>
  )
}

export default ExamSummary
