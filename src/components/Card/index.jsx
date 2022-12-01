import React from 'react'

function Card({ className, href, title, desc, caption, children }) {
    return (
        <div 
            className={`flex flex-col justify-center gap-y-xs ${className} cursor-pointer`}
            onClick={ () => window.location.href = href }
        >
            { children }

            <h4 className="H4">
                { title }
            </h4>

            <p className="body opacity-50">
                { desc }
            </p>

            <p className="minor opacity-30">
                { caption }
            </p>
        </div>
    )
}

export default Card