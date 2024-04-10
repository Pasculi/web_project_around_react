import React from 'react'
import logo from '../images/logo.svg'

export default function Header() {
  return (
    <>
      <header className="header">
        <img className="header__logo" src={logo} alt="Logo Around" />
        <div className="header__line"></div>
      </header>
    </>
  )
}
