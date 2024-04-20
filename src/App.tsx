import './App.css'
import CourseGoal from './components/CourseGoal'
import goalsImage from './assets/goals.jpg'
import Header from './components/Header'

function App() {
  console.log(typeof goalsImage)

  return (
    <main>
      <Header 
        image={{src: goalsImage, alt: "lalala"}}
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
