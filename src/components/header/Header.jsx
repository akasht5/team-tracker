import React from 'react'
import { ReactComponent as Logo } from '../../teamtracker.svg';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
  return (
    <div className="header">
        <div className="header-container">
            <div className="logo-container">
                <Logo className="logo" />
                <div className="logo-text">
                    <Link to="/">
                        <span>TeamTracker</span>
                    </Link>
                </div>
            </div>
            <div className="links">
                {
                    window.location.pathname === '/login' ? (
                        <div>
                            <span>New to TeamTracker ?</span>
                            <Link to="/signup">
                                <button>Create an accont</button>
                            </Link>
                        </div>
                    ) : (
                        window.location.pathname === '/signup' ? (
                            <div>
                                <span>Already have an account</span>
                                <Link to="/login">
                                    <button>Login</button>
                                </Link>
                            </div>
                        ) : (
                            <div>
                                <Link to="/">
                                    <button>Logout</button>
                                </Link>
                            </div>
                        )
                    )
                }
            </div>
        </div>
    </div>
  )
}

export default Header