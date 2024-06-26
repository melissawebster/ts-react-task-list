import './index.css'
import CourseGoal from './components/CourseGoal'
import Header from './components/Header'

function App() {

  return (
    <main className='container flex flex-col gap-10'>
      <Header />
      <CourseGoal
        title="First task"
        description="Task description"  
      />
    </main>
  )
}

export default App
