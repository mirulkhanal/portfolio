import React from 'react'
// import { ProjectsContainer } from '../Projects/ProjectStyledComponents'
import {
  NavBrand,
  NavContainer,
  NavItem,
  NavLink,
  NavMenu,
  BrandLink,
  Icon,
  ProjectsIcon,
  ContactIcon,
} from './NavComponents'
// import Projects from '../Projects/Projects'
const NavBar = () => {
  return (
    <>
      <NavContainer>
        <NavBrand>
          <BrandLink to='/'>Noir</BrandLink>
        </NavBrand>
        <NavMenu>
          <NavItem>
            <Icon />
            <NavLink to='/'>Home</NavLink>
          </NavItem>
          <NavItem>
            <ProjectsIcon />
            <NavLink to='/projects'>Projects</NavLink>
          </NavItem>
          <NavItem>
            <ContactIcon />
            <NavLink to='/contact'>Contact Me</NavLink>
          </NavItem>
        </NavMenu>
      </NavContainer>
    </>
  )
}

export default NavBar
