import React from 'react'
import Button from './Button'
import Header from './Header'
import Loader from './Loader'

function AppShell({ loading, showAddTask, setShowAddTask, children }) {
  return (
    <>
        <div className="App relative flex justify-center py-[40px]">
            <div className="container  p-[30px] border-[steelblue] rounded-[5px]  items-center border-solid border-[1px] max-w-[500px] font-poppins">
                <Loader isLoading={loading}/>
                <div className='flex justify-between'>
                    <Header />
                    <Button
                        color={showAddTask ? 'green' : 'red'}
                        text={showAddTask ? 'Add' : 'Close'}
                        onAdd={() => setShowAddTask(!showAddTask)}
                    />
                </div>
                {children}
            </div>
        </div>
    </>
  )
}

export default AppShell