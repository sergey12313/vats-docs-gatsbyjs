import React from "react"
import { menuType } from "../summary"
import { Link } from "gatsby"

const ulStyle = {
  listStyle: "none",
  margin: 0,
  padding: 0,
  color: `#364149`,
  fontSize: `14px`,
  letterSpacing: `.2px`,
}

const liStyle = {
  margin: 0,
  padding: `10px 15px`,
  color: `#939da3`,
  "& a": {
    // textDecoration: 'none' ,
    // color: "red"
  },
}
const LinkStyle = {
  // textDecoration: 'line-through',
  // textDecorationLine: "none",
  // color: "green"
}

const ListItem = ({ children }) => {
  return <li css={liStyle}>{children}</li>
}
const ListLink = ({ to, children, onClick }) => {
  return (
    <Link css={LinkStyle} onClick={onClick} to={to} activeClassName="active">
      {children}
    </Link>
  )
}

export const Navigation = ({ items, onClick }) => {
  let index = 0
  const createMenuItem = item => {
    if (item.type === menuType.header) {
      return <ListItem key={index++}>{item.title.toUpperCase()} </ListItem>
    } else if (item.type === menuType.chapter) {
      return (
        <ListItem key={index++}>
          <ListLink to={item.path} onClick={e => onClick(e)}>{item.title}</ListLink>
          <ul css={ulStyle}>{item.child.map(createMenuItem)}</ul>
        </ListItem>
      )
    } else {
      return (
        <ListItem key={index++}>
          <ListLink to={item.path} onClick={e => onClick(e)} >{item.title}</ListLink>
        </ListItem>
      )
    }
  }

  return (
    <nav >
      <ul css={ulStyle}>{items.map(createMenuItem)}</ul>
    </nav>
  )
}
