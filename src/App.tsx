import './App.css'
import CourseGoal from './components/CourseGoal'
import Header from './components/Header'

function App() {

  return (
    <main>
      <Header 
      >
        <h2>Your tasks</h2>
      </Header>
      <CourseGoal
        title="First task"
        description="Task description"  
      />
    </main>
  )
}

export default App
