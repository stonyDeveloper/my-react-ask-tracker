import React, { useEffect, useState } from 'react'
import useFetchTasks from './useFetchTasks';



function useAddTasks() {
    const tasks = useFetchTasks()
    const [,setTasks] = useState()

    // const [fetchLoading, setLoading] = useState(false);
    const addTask = async (task) => {
        const res = await fetch('https://637a6229702b9830b9ed4bb8.mockapi.io/tasks', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(task)
        })

        const data = await res.json()
        console.log(data)
        setTasks([...tasks, data])
        // setLoading(false)
        // console.log(tasks)
    }
    // const check = console.log(tasks)

    return addTask
}

export default useAddTasks