import React from 'react'

const Badge = ({children}) => {
  return (
    <div className="inline-flex items-center rounded-full bg-blue-100 px-3 py-1 text-sm font-semibold text-blue-800">
      {children}
    </div>
  )
}

export default Badge
