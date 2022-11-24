import { Link } from 'react-router-dom'
import AppShell from './AppShell'

const About = ({showAddTask, setShowAddTask}) => {
    console.log(showAddTask)
  return (
    <AppShell
        showAddTask={showAddTask}
        setShowAddTask={setShowAddTask}
    >
        <div>
            <h4>Version 1.0.0</h4>
            <Link to="/" className='underline'>Go Back</Link>
        </div>
    </AppShell>
  )
}

export default About