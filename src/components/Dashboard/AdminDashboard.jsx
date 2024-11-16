import React from 'react'
import Header from '../others/Header'
import Form from '../others/Form'
const AdminDashboard = ({setLoggedIn}) => {
  return (
    <div className="bg-[#1c1c1c] min-h-screen w-full flex flex-col">
    {/* Header */}
    <div className="p-4 border-b border-gray-700">
        <Header setLoggedIn={setLoggedIn} />
    </div>

    {/* Form */}
    <div className="flex-grow p-4">
        <Form />
    </div>
</div>

  )
}

export default AdminDashboard