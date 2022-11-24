import { useState, useEffect } from 'react';
import Header from './components/Header';
import Button from './components/Button';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import {fetchTasks} from './main'
import Loader from './components/Loader';
import About from './components/About';
import useFetchTask from './hooks/useFetchTasks';
import useAddTasks from './hooks/useAddTasks'
import useDeleteTask from  './hooks/useDeleteTask'
import Home from './components/Home';
import useToggleReminder from './hooks/useToggleReminder';

function App() {
  const [showAddTask, setShowAddTask] = useState(true)
  // const [tasks, setTasks] = useState([])
  const [loading, setLoading] = useState(false);
  const [fetchLoading, tasks ] = useFetchTask();
  const check = useAddTasks();
  const pop = useDeleteTask();
  const toggle = useToggleReminder();

  // useEffect(() => {

  //   const getTasks = async () => {
  //     setLoading(true)
  //     const tasksFromAPI = await fetchTasks()
  //     console.log('test', tasksFromAPI)
  //     setTasks(tasksFromAPI)
  //     setLoading(false)
  //   }
  //   getTasks()
  // }, [])

  // console.log(fetchLoading, data);

// Fetch Task
const fetchTask = async (id) => {
  setLoading(true)
  const res = await fetch(`https://637a6229702b9830b9ed4bb8.mockapi.io/tasks/${id}`)
  const data = await res.json()
  setLoading(false)
  return data
}

// // Add Tasks
// const addTasks = async (task) => {
//   setLoading(true)
//   const res = await fetch('https://637a6229702b9830b9ed4bb8.mockapi.io/tasks', {
//     method: 'POST',
//     headers: {
//       'Content-type': 'application/json'
//     },
//     body: JSON.stringify(task)
//   })

//   const data = await res.json()
//   console.log(data)
//   setTasks([...tasks, data])
//   setLoading(false)
// }

// // Delete Task
// const deleteTask = async (id) => {
//   setLoading(true)
//   const res = await fetch(`https://637a6229702b9830b9ed4bb8.mockapi.io/tasks/${id}`, {
//     method: 'DELETE'
//   })
//   setTasks(tasks.filter((task) => task.id !== id))
//   setLoading(false)
// }

// // Toggle Reminder
// const toggleReminder = async (id) => {
//   setLoading(true)
//   const taskToToggle = await fetchTask(id)
//   const updateReminder = {
//     ...taskToToggle,
//     reminder: !taskToToggle.reminder
//   }
//   console.log(updateReminder)
//   const res = await fetch(`https://637a6229702b9830b9ed4bb8.mockapi.io/tasks/${id}`, {
//     method: 'PUT',
//     headers: {
//       'Content-type': 'application/json'
//     },
//     body: JSON.stringify(updateReminder)
//   })

//   const data = await res.json()

//   setTasks(tasks.map((task) =>
//     task.id === id ? {
//       ...task,
//       reminder: data.reminder
//     } : task
//   ))

//   setLoading(false)
// }


  return (
    <Router>
          <Routes>
            <Route
              path='/'
              element={
                <Home
                  showAddTask={showAddTask}
                  addTasks={check}
                  tasks={tasks}
                  deleteTask={pop}
                  toggleReminder={toggle}
                  setShowAddTask={setShowAddTask}
                  loading={loading}
                />}
            />
            <Route
              path='/about'
              element={
                <About 
                  loading={loading}
                  showAddTask={showAddTask}
                  setShowAddTask={setShowAddTask}
                />}
            />
          </Routes>


    </Router>
  );
}

export default App;
