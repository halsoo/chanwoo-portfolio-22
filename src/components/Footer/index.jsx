import React from 'react'
import { Link as GLink } from 'gatsby'
import { v4 as uuid } from 'uuid'
import RightArrow from '../../images/rightarrow.svg'
import Linkedin from '../../images/linkedin.svg'
import IG from '../../images/IG.svg'
import Vimeo from '../../images/vimeo.svg'
import Twt from '../../images/twt.svg'

function Footer({ className }) {

    return (
        <footer className={`w-full h-[378px] px-xxl4 pt-xxl3 grid grid-cols-12 gap-x-l bg-black ${className}`}>
            <div className="col-span-4 flex flex-col">
                <h3 className="mb-xs H3 text-white">
                    Chanwoo Lee
                </h3>
                <p className="Subtitle text-white">
                    Positive Impact of Technology on the real world via Design
                </p>
            </div>

            <div className="col-span-4 flex flex-col">
                <hr className="w-full mb-xs stroke-white stroke-1"/>
                <p className="mb-l body text-white">
                    MENU
                </p>
                <div className="w-full flex flex-col">
                    {
                        [
                            ['/projects', 'Projects'],
                            ['/approach', 'Approach'],
                            ['/about', 'About'],
                        ].map(el => (
                            <GLink to={el[0]} key={uuid()}>
                                <div className="w-full flex justify-between items-center">
                                    <p className="H4 text-white">
                                        { el[1] }
                                    </p>
                                    <RightArrow className="fill-white"/>
                                </div>
                            </GLink>
                        ))
                    }
                </div>
            </div>

            <div className="col-span-4 flex flex-col">
                <hr className="w-full mb-xs stroke-white stroke-1"/>
                <p className="mb-l body text-white">
                    Get in touch
                </p>
                <p className="mb-l body text-white">
                    hellochanu@gmail.com
                </p>
                <div className="w-full flex flex-row gap-x-m">
                    {
                        [
                            ["https://www.linkedin.com/in/chanulee/", Linkedin],
                            ["https://www.instagram.com/chanu.kyle.lee/", IG],
                            ["https://vimeo.com/chanulee", Vimeo],
                            ["https://twitter.com/krevony", Twt]
                        ].map(el => {
                            const [link, Elem] = el
                            return(
                                <a href={link} target="_blank" key={uuid()}>
                                    <Elem/>
                                </a>
                            )
                        })
                    }
                </div>
            </div>

        </footer>
    )
}

export default Footer