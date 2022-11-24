import React, { useEffect, useState } from 'react'

function useFetchTasks() {
    const [tasks, setTask] = useState([]);
    const [fetchLoading, setLoading] = useState(false);

    const fetchTask = async () => {
        // setLoading(true)
        const res = await fetch('https://637a6229702b9830b9ed4bb8.mockapi.io/tasks')
        const tasks = await res.json()
        // setLoading(false)
        // console.log(res)
        return setTask(tasks)
        
    };

    
    useEffect(() => {
        fetchTask();
      return () => {}
    }, [])
    
    return [fetchLoading, tasks]
}

export default useFetchTasks