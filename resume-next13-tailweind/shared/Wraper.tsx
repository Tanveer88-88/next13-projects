import React from "react"

const Wraper = ({children}:{children:React.ReactNode}) => {
  return (
    <div className="max-w-2xl mx-auto px-4">
        {children}
        </div>
  )
}

export default Wraper