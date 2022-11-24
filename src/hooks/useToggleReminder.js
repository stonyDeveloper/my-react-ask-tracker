import useFetchTasks from "./useFetchTasks";

function useToggleReminder() {
    const existingTasks = useFetchTasks()
    const [, tasks] = existingTasks
    let value = null

    // const [, setd] = useState([])


    // Toggle Reminder
    const toggleReminder = async (id) => {
        console.log(tasks)

        tasks.forEach((task) => {
            if (task.id === id) {
                // console.log(task.reminder)
                const updateReminder = !task.reminder
                console.log(updateReminder)
                value = updateReminder
            }
        })

        console.log('look',value)
        const updateReminder = {
            reminder: value
        }

        const res = fetch(`https://637a6229702b9830b9ed4bb8.mockapi.io/tasks/${id}`, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(updateReminder)
        })

        // const data = res.json()
        // console.log('data', data)





        // const res = await fetch(`https://637a6229702b9830b9ed4bb8.mockapi.io/tasks/${id}`, {
        //     method: 'PUT',
        //     headers: {
        //         'Content-type': 'application/json'
        //     },
        //     body: {
        //         reminder: !reminder
        //     }

        // })

        // const data = await res.json()
        // console.log('data', data)





        // console.log(tasks)
        // tasks.forEach(function(task){
        //     console.log('asas')
        //     // if(task.id === id){
        //     //     console.log("the task", task)
        //     // }
        // })
        // setLoading(true)
        // const taskToToggle = await fetchTask(id)
        // const updateReminder = {
        //     ...taskToToggle,
        //     reminder: !taskToToggle.reminder
        // }
        // console.log(updateReminder)
        // const res = await fetch(`https://637a6229702b9830b9ed4bb8.mockapi.io/tasks/${id}`, {
        //     method: 'PUT',
        //     headers: {
        //         'Content-type': 'application/json'
        //     },
        //     body: JSON.stringify(updateReminder)
        // })

        // const data = await res.json()


    }
    return toggleReminder;
}

export default useToggleReminder