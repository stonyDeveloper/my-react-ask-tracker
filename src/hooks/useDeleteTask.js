import useFetchTasks from "./useFetchTasks";
import useState from 'react'

function useDeleteTask() {
    const tasks = useFetchTasks()
    // const [, setd] = useState([])


    const deleteTask = async (id) => {
        console.log(id);
        await fetch(`https://637a6229702b9830b9ed4bb8.mockapi.io/tasks/${id}`, {
            method: 'DELETE'
        })
        // setTasks(tasks.filter((task) => task.id !== id))
    }
    return deleteTask;
}

export default useDeleteTask