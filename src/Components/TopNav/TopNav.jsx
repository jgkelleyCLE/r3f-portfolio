import React from 'react'
import { FlexRow, NavContainer } from '../UI'
import { Link, useLocation } from 'react-router-dom'
import ThemeToggle from '../ThemeToggle'
import { useSelector } from 'react-redux'

const TopNav = () => {

  const pathname = useLocation().pathname
  const theme = useSelector(state => state.settings.theme)

  return (
    <NavContainer>
      {/* LEFT SIDE */}
        <Link to="/" className="flex items-start -gap-2">

        {/* DESKTOP */}
        <h1 className={`${pathname === "/" ? "underline underline-offset-4 decoration-accent decoration-2" : null} md:text-2xl text-lg font-extrabold hidden md:flex`}>Jack Kelley</h1>
        <p className="text-accent ml-1 hidden md:flex">.dev</p>


        {/* MOBILE */}
        <FlexRow className="gap-0 relative md:hidden">
          <h1 className={`${pathname === "/" ? "underline underline-offset-4 decoration-accent decoration-2" : null} flex text-5xl font-extrabold relative`}>J</h1>
          <h1 className={` ${pathname === "/" ? "underline underline-offset-4 decoration-accent decoration-2" : null} flex text-5xl font-extrabold absolute left-3.5`}>K</h1>
          <p className="text-accent ml-1 absolute top-0 left-10">.dev</p>
        </FlexRow>
          
        </Link>


      {/* RIGHT SIDE */}
        <FlexRow className="md:gap-4">
          <ThemeToggle />
            <Link className={`${pathname === "/about" ? "underline underline-offset-4 decoration-accent decoration-3" : "null"} ${theme === "jack-light" ? "text-white" : null} md:text-xl text-primary `} to="/about">About</Link>
            <Link className={`${pathname === "/projects" ? "underline underline-offset-4 decoration-accent decoration-3" : "null"} ${theme === "jack-light" ? "text-white" : null} md:text-xl text-primary `} to="/projects">Projects</Link>
            <Link className={`${pathname === "/contact" ? "underline underline-offset-4 decoration-accent decoration-3" : "null"} ${theme === "jack-light" ? "text-white" : null} md:text-xl text-primary `} to="/contact">Contact</Link>
        </FlexRow>
    </NavContainer>
  )
}

export default TopNav