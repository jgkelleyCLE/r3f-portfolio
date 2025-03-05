import React from 'react'
import { FlexRow, NavContainer } from '../UI'
import { Link, useLocation } from 'react-router-dom'
import ThemeToggle from '../ThemeToggle'

const TopNav = () => {

  const pathname = useLocation().pathname

  return (
    <NavContainer>
        <Link to="/" className="flex items-start">
        <h1 className={`${pathname === "/" ? "underline underline-offset-4 decoration-accent decoration-2" : null} md:text-2xl text-lg font-extrabold`}>Jack Kelley</h1>
          <p className="text-accent ml-1">.dev</p>
        </Link>
        <FlexRow>
          <ThemeToggle />
            <Link className={`${pathname === "/about" ? "underline underline-offset-4 decoration-accent decoration-3" : "null"} md:text-xl text-primary `} to="/about">About</Link>
            <Link className={`${pathname === "/projects" ? "underline underline-offset-4 decoration-accent decoration-3" : "null"} md:text-xl text-primary `} to="/projects">Projects</Link>
        </FlexRow>
    </NavContainer>
  )
}

export default TopNav