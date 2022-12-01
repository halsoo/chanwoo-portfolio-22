import React from 'react'

function Tag({ className, primary=false, children }) {
    return (
        <div className={`${className} px-l py-xs flex items-center rounded-l ${ primary ? 'bg-blue text-white' : 'bg-grey' }`}>
            { children }
        </div>
    )
}

export default Tag