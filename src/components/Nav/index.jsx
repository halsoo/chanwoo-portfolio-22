import React from 'react'
import { withPrefix } from 'gatsby'
import { v4 as uuid } from 'uuid'

function Nav({ className, transparent=false }) {
    const textColor = transparent ? 'text-white' : 'text-black'

    return (
        <nav className={`w-full h-[95px] px-xxl4 py-xl flex flex-row justify-between bg-transparent ${className}`}>
            <a className={`H4 ${textColor}`} href={withPrefix("/")}>
                CHANWOO LEE
            </a>

            <div className="flex gap-x-xl">
                {
                    [
                        ['/projects', 'PROJECTS'],
                        ['/approach', 'APPROACH'],
                        ['/about', 'ABOUT'],
                    ].map(el => (
                        <a className={`H4 hover:underline ${textColor}`} href={withPrefix(el[0])} key={uuid()}>
                            { el[1] }
                        </a>
                    ))
                }
            </div>
        </nav>
    )
}

export default Nav