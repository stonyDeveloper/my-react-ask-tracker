import { FaTimes } from 'react-icons/fa'

const Task = ({ task, onDelete, onToggle }) => {
    const handleClick = () => {
        console.log('working')
        onDelete(task.id)
    }

    const handleToggle = () => {
        console.log('toggling')
        onToggle(task.id)
    }
    
    return (
        <div 
        className={`bg-[#f4f4f4] cursor-pointer  
        ${task.reminder 
        ? 'border-l-green-700 border-l-[6px]'
        : ''}`}
        onDoubleClick={handleToggle}
         
         >
            <div className='flex items-center mx-[20px] mt-[5px] pt-[10px] font-bold text-[1.17em]  justify-between'>
                <p>{task.text}</p>
                <FaTimes className='text-red-500 cursor-pointer' onClick={handleClick}/>
            </div>
            <div className='mx-[20px] pb-[10px]'>
                {task.day}
            </div>
        </div>
    )
}

export default Task