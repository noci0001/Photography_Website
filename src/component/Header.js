import React from 'react';

export default function Header() {
  return (
    <div>
        <header>
            <hr></hr>
            <img src={process.env.PUBLIC_URL + '/images/HeaderImage.png'} alt='Ruud Rodermond' className="headerImage" />
            <hr></hr>
            <nav className="nav">
                    <ul className="nav__list">
                            <li className="nav__item"><a href="#home" className="nav__link">HOME</a></li>
                            <li className="nav__item"><a href="#services" className="nav__link">BRUILOFT</a></li>
                            <li className="nav__item"><a href="#about" className="nav__link">AWARDS</a></li>
                            <li className="nav__item"><a href="#work" className="nav__link">LOVE</a></li>
                            <li className="nav__item"><a href="#book" className="nav__link">ZWANGER</a></li>
                            <li className="nav__item"><a href="#book" className="nav__link">NEWBORN</a></li>
                            <li className="nav__item"><a href="#book" className="nav__link">GEZIN</a></li>
                            <li className="nav__item"><a href="#book" className="nav__link">PORTRET</a></li>
                            <li className="nav__item"><a href="#book" className="nav__link">ZAKELIKJ</a></li>
                            <li className="nav__item"><a href="#book" className="nav__link">BLOG</a></li>
                            <li className="nav__item"><a href="#book" className="nav__link">CONTACT</a></li>
                        </ul>
                </nav>
        </header>
       
    </div>
  )
}