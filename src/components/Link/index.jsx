import React from 'react'
import Tag from '../Tag'
import RightArrow from '../../images/rightarrow.svg'

function Link({ className, href, noArrow=false, children }) {
    return (
        <a href={href}>
            <Tag className={className}>
                { children }
                { !noArrow && <RightArrow className="ml-xs fill-black"/> }
            </Tag>
        </a>
    )
}

export default Link