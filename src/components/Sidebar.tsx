import {
  Bell,
  BookmarkSimple,
  DotsThreeCircle,
  EnvelopeSimple,
  FileText,
  Hash,
  House,
  Pencil,
  User
} from 'phosphor-react'
import logo from '../assets/twitter.svg'
import { NavLink } from 'react-router-dom'
import '../assets/css/sidebar.css'

export function Sidebar() {
  return (
    <aside className="sidebar">
        <img src={logo} alt="Twitter Logo" className="logo" />
        <nav className="main-navigation">
          <NavLink to="/">
            <House weight="fill" />
            <span>Home</span>
          </NavLink>
          <a href="#">
            <Hash />
            <span>Explore</span>
          </a>
          <a href="#">
            <Bell />
            <span>Notifications</span>
          </a>
          <a href="#">
            <EnvelopeSimple />
            <span>Messages</span>
          </a>
          <a href="#">
            <BookmarkSimple />
            <span>Brookmarks</span>
          </a>
          <a href="#">
            <FileText />
            <span>Lists</span>
          </a>
          <a href="#">
            <User />
            <span>Profile</span>
          </a>
          <a href="#">
            <DotsThreeCircle />
            <span>More</span>
          </a>
        </nav>
        <button className="new-tweet">
          <Pencil />
          <span>Tweet</span>
        </button>
      </aside>
  )
}
