import { ArrowLeft, Play, Clock, AlertCircle, CheckCircle } from 'lucide-react'

function Instructions({ studentInfo, onStartExam, onBack }) {
  return (
    <div className="min-h-screen p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-gray-600 hover:text-gray-800 mb-6 transition"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Login
        </button>

        <div className="bg-white rounded-2xl shadow-xl p-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-2">
              Exam Instructions
            </h1>
            <p className="text-gray-600">Please read carefully before starting</p>
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6 rounded-r-lg">
            <div className="flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-semibold text-blue-800">Student Information</p>
                <p className="text-blue-700 text-sm mt-1">
                  <strong>ID:</strong> {studentInfo?.studentId} | <strong>Course:</strong> {studentInfo?.course}
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-6 mb-8">
            <div>
              <h3 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                <Clock className="w-5 h-5 text-blue-600" />
                Exam Duration
              </h3>
              <p className="text-gray-600 ml-7">You will have <strong>60 minutes</strong> to complete the exam.</p>
            </div>

            <div>
              <h3 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-600" />
                Important Instructions
              </h3>
              <ul className="space-y-2 text-gray-600 ml-7">
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span>Read each question carefully before answering</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span>You can navigate between questions using the question panel</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span>Mark questions for review if you're unsure</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span>The timer will start as soon as you click "Start Exam"</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span>Make sure to submit before time runs out</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span>Once submitted, you cannot change your answers</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                <AlertCircle className="w-5 h-5 text-amber-600" />
                Technical Requirements
              </h3>
              <ul className="space-y-2 text-gray-600 ml-7">
                <li className="flex items-start gap-2">
                  <span className="text-amber-600 mt-1">•</span>
                  <span>Stable internet connection throughout the exam</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-600 mt-1">•</span>
                  <span>Use a modern browser (Chrome, Firefox, Edge)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-600 mt-1">•</span>
                  <span>Do not refresh the page during the exam</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="flex gap-4">
            <button
              onClick={onBack}
              className="flex-1 px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition font-semibold"
            >
              Cancel
            </button>
            <button
              onClick={onStartExam}
              className="flex-1 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition font-semibold flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
            >
              <Play className="w-5 h-5" />
              Start Exam
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Instructions
