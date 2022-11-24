 // Fetch Tasks
//   const fetchTasks = async () => {
//     const res = await fetch('https://637a6229702b9830b9ed4bb8.mockapi.io/tasks')
//     const data = await res.json()
//     return data
//   }

//   // Fetch Task
//   const fetchTask = async (id) => {
//     setLoading(true)
//     const res = await fetch(`https://637a6229702b9830b9ed4bb8.mockapi.io/tasks/${id}`)
//     const data = await res.json()
//     setLoading(false)
//     return data
//   }

//   // Add Tasks
//   const addTasks = async (task) => {
//     setLoading(true)
//     const res = await fetch('https://637a6229702b9830b9ed4bb8.mockapi.io/tasks', {
//       method: 'POST',
//       headers: {
//         'Content-type': 'application/json'
//       },
//       body: JSON.stringify(task)
//     })

//     const data = await res.json()
//     console.log(data)
//     setTasks([...tasks, data])
//     setLoading(false)
//   }

//   // Delete Task
//   const deleteTask = async (id) => {
//     setLoading(true)
//     const res = await fetch(`https://637a6229702b9830b9ed4bb8.mockapi.io/tasks/${id}`, {
//       method: 'DELETE'
//     })
//     setTasks(tasks.filter((task) => task.id !== id))
//     setLoading(false)
//   }

//   // Toggle Reminder
//   const toggleReminder = async (id) => {
//     setLoading(true)
//     const taskToToggle = await fetchTask(id)
//     const updateReminder = {
//       ...taskToToggle,
//       reminder: !taskToToggle.reminder
//     }
//     console.log(updateReminder)
//     const res = await fetch(`https://637a6229702b9830b9ed4bb8.mockapi.io/tasks/${id}`, {
//       method: 'PUT',
//       headers: {
//         'Content-type': 'application/json'
//       },
//       body: JSON.stringify(updateReminder)
//     })

//     const data = await res.json()

//     setTasks(tasks.map((task) =>
//       task.id === id ? {
//         ...task,
//         reminder: data.reminder
//       } : task
//     ))

//     setLoading(false)
//   }

//   export {fetchTask, fetchTasks, addTasks, deleteTask, toggleReminder}
// export {fetchTasks}