import React from 'react';
import logo from '../logo.svg';

const Header = (props) => (
    <React.Fragment>
        <header role="banner" style={{
            marginBottom: '40px',
            display: 'flex',
            justifyContent: 'center',
        }}>
            <div className="header">
                <a href="https://www.comicrelief.com/" rel="home" className="header-logo">
                <img 
                    src={logo}
                    style={{
                        height: '40px',
                        marginTop: '20px',
                        marginBottom: '20px',
                    }}
                />
                <span className="visually-hidden">Go to Home Page</span>
                </a>
            </div>
        </header>
    </React.Fragment>
)

export default Header;