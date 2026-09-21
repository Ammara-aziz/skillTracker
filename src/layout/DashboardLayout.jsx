import React from 'react'
import Sidebar from './Sidebar'
import Navbar from './Navbar'


const DashboardLayout = ({ children, title="Dashboard" }) => {
  return (
    <div className="flex min-h-screen bg-slate-50">
      <Sidebar/>
      <div className="flex min-w-0 flex-1 flex-col">
        {/* Navbar */}
        <Navbar title={title} />
        {/* Main content */}
        <main className="flex-1 p-6">
          {children}
        </main>

      </div>
    </div>
  )
}

export default DashboardLayout
