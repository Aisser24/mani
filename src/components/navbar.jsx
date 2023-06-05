import React from 'react'
import content from '../../content'
import { nanoid } from 'nanoid'
import { HashLink } from 'react-router-hash-link'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <>
            <nav className='flex justify-between items-center p-10 pt-5 pb-5 bg-primary text-white'>
                <Link to={"/"}>
                    <img src={content.nav.navImg.url} alt={content.nav.navImg.alt} className='h-14' />
                </Link>
                <ul className='flex gap-10 items-center font-semibold'>
                    {
                        content.nav.navLinks.map(navLink => {
                            return <li key={nanoid()}><HashLink to={`/${navLink.to}`}>{navLink.name}</HashLink></li>
                        })
                    }
                    <li>
                        <Link to={"/cart"}>
                            {
                                content.nav.shoppingCart.svg
                            }
                        </Link>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default Navbar