
import AddTask from './AddTask'
import AppShell from './AppShell'
import Footer from './Footer'
import Tasks from './Tasks'


const Home = ({showAddTask, addTasks, tasks, deleteTask, setShowAddTask, toggleReminder, loading}) => {
    return (
        <AppShell
            showAddTask={showAddTask}
            setShowAddTask={setShowAddTask}
            loading={loading}
        >
            <div className='mt-[20px]'>
                {!showAddTask && (<AddTask onAdd={addTasks} />)}
            </div>
            <div className='mt-[20px]'>
                {tasks.length > 0 ? (
                    <Tasks 
                        tasks={tasks} 
                        onDelete={deleteTask} 
                        onToggle={toggleReminder} 
                        className='bg-red-500' 
                    />) : 
                    ('No tasks to show')}
            </div>
            <div className='text-center mt-[30px]'>
            <Footer />
          </div>
        </AppShell>
    )
}

export default Home