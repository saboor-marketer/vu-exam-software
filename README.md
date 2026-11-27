# VU Exam Software Clone

A modern React-based clone of the Virtual University Examination System, built with Vite, React, and Tailwind CSS.

## Features

- **Login System**: Student authentication with ID and password
- **Instructions Page**: Comprehensive exam guidelines before starting
- **Exam Interface**: 
  - Multiple choice questions with single answer selection
  - Real-time countdown timer (60 minutes)
  - Question navigation panel with status indicators
  - Mark questions for review functionality
  - Progress tracking (answered/unanswered/marked)
- **Submit Confirmation**: Modal with exam summary before submission
- **Results Summary**: 
  - Score calculation with percentage
  - Grade assignment (A+ to F)
  - Detailed answer review with correct/incorrect indicators
  - Print functionality

## Tech Stack

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Styling
- **Lucide React** - Icons

## Installation

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Setup Steps

1. Install dependencies:
```bash
npm install
```

**Note for Windows users**: If you encounter PowerShell execution policy errors, run:
```powershell
cmd /c npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to the URL shown in the terminal (typically `http://localhost:5173`)

## Usage

### Demo Mode
- Enter any Student ID (minimum 4 characters)
- Enter any password
- Click "Login to Exam"

### Taking the Exam
1. Read the instructions page
2. Click "Start Exam" to begin
3. Answer questions by selecting options
4. Navigate between questions using the navigation panel or Previous/Next buttons
5. Mark questions for review if unsure
6. Submit the exam when ready (or when timer expires)
7. View your results with detailed answer breakdown

## Project Structure

```
vu-exam-software/
├── src/
│   ├── components/
│   │   ├── Login.jsx           # Login page component
│   │   ├── Instructions.jsx    # Exam instructions page
│   │   ├── ExamInterface.jsx   # Main exam interface with questions
│   │   └── ExamSummary.jsx     # Results and grade display
│   ├── App.jsx                 # Main app component with routing
│   ├── main.jsx                # React entry point
│   └── index.css               # Global styles with Tailwind
├── index.html                  # HTML template
├── package.json                # Dependencies
├── vite.config.js              # Vite configuration
├── tailwind.config.js          # Tailwind configuration
└── postcss.config.js           # PostCSS configuration
```

## Customization

### Adding Questions
Edit the `SAMPLE_QUESTIONS` array in `src/components/ExamInterface.jsx` and `src/components/ExamSummary.jsx`:

```javascript
{
  id: 1,
  question: "Your question here?",
  options: ["Option A", "Option B", "Option C", "Option D"],
  correctAnswer: 0  // Index of correct option (0-3)
}
```

### Changing Exam Duration
Modify the timer in `src/components/ExamInterface.jsx`:
```javascript
const [timeLeft, setTimeLeft] = useState(60 * 60) // Change 60 to desired minutes
```

### Styling
- Colors are configured in `tailwind.config.js`
- Component-specific styles use Tailwind utility classes
- Custom VU blue colors are defined in the theme

## Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory.


## Authors

***Abdul Saboor***
***Khansa Younas***

---


## License

This is a demo project for educational purposes. 




