import React from 'react'

const Navbar = () => {
    return (
        <>
            <nav className='navbar navbar-expand navbar-warning bg-warning'>
                <div className="container">
                    <a className='fs-2 fw-bolder navbar-brand' href="">
                        Emoji<span className='bg-dark text-warning p-1'>Pedia😊</span>
                    </a>
                    <ul className='navbar-nav fw-semibold'>
                        <li className="nav-items">
                            <a href="" className="nav-link">Home</a>
                        </li>
                        <li className="nav-items">
                            <a href="" className="nav-link">Search</a>
                        </li>
                        <li className="nav-items">
                            <a href="" className="nav-link">Documents</a>
                        </li>
                    </ul>
                    <button className='btn btn-danger'>
                        Learn More
                    </button>
                </div>
            </nav>
        </>
    )
}

export default Navbar