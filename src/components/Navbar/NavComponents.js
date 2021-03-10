import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { GoHome } from 'react-icons/go'
import { AiOutlineProject } from 'react-icons/ai'
import { TiContacts } from 'react-icons/ti'
export const NavContainer = styled.div`
  position: sticky;
  position: -webkit-sticky;
  top: 0;
  z-index: 10;
  width: 70px;
  background: #071013;
  padding: 0 50px;
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid rgba(255, 255, 255, 0.3);
`

export const NavBrand = styled.h1`
  font-size: 3.5em;
`
export const NavLink = styled(Link)`
  text-decoration: none;
`
export const BrandLink = styled(Link)`
  text-decoration: none;
  color: #06ba63;
`
export const NavMenu = styled.ul`
  display: flex;
  list-style: none;
  justify-content: center;
`
export const NavItem = styled.div`
  margin: 50px;
  font-size: 1.5em;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  & > * {
    color: #06ba63;
  }
  border-bottom: 3px solid #071013;
  cursor: pointer;
  &:hover {
    & > * {
      color: white;
    }
    transition: 200ms ease-out infinite;
    border-bottom: 3px solid #06ba63;
  }
`
export const Icon = styled(GoHome)`
  /* padding: 10px; */
  color: #06ba63;
  margin: auto 10px;
`
export const ProjectsIcon = styled(AiOutlineProject)`
  color: #06ba63;
  margin: auto 10px;
`
export const ContactIcon = styled(TiContacts)`
  color: #06ba63;
  margin: auto 10px;
`
