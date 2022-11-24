import { useEffect, useState } from 'react'

const AddTask = ({ onAdd }) => {
    const [text, setText] = useState('')
    const [day, setDay] = useState('')
    const [reminder, setReminder] = useState('')
    const onSubmit = (e) => {
        e.preventDefault()
        if (!text) {
            alert('Please add a task')
            return
        }
        console.log('onAdd')
        onAdd({ text, day, reminder })
        setText('')
        setDay('')
        setReminder(false)
    }

    useEffect(() => {
        console.log(reminder, 'reminder fired!!');

        return () => { }
    }, [reminder]);


    return (
        <form onSubmit={onSubmit}>
            <div className='flex flex-col space-y-[30px]'>
                <div>
                    <p>Task</p>
                    <input
                        type="text"
                        placeholder='Add Task'
                        className='px-[7px] py-[7px] border-solid border-[1px] rounded-[2px] border-black w-[100%] text-[17px] mt-[5px] placeholder-gray-500'
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                    />
                </div>
                <div>
                    <p>Day & Time</p>
                    <input
                        type="text"
                        placeholder='Add Day & Time'
                        className='px-[7px] py-[7px] border-solid border-[1px] rounded-[2px] border-black w-[100%] text-[17px] mt-[5px] placeholder-gray-500'
                        value={day}
                        onChange={(e) => setDay(e.target.value)}
                    />
                </div>
                <div>
                    <div
                        className='flex space-x-[11em]'>
                        <p>Set Reminder</p>
                        <input
                            className='w-[20px]'
                            type="checkbox"
                            value={reminder}
                            checked={reminder}
                            onChange={(e) => setReminder(e.currentTarget.checked)}

                        />
                    </div>
                </div>
            </div>

            <div className='mt-[30px] text-center'>
                <input type='submit' value='Save Task' className="bg-black text-white w-[100%] py-[10px] px-[20px] rounded-md cursor-pointer" />
            </div>

        </form>
    )
}

export default AddTask