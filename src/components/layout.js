import * as React from "react"
import { Link } from "gatsby"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header

  if (isRootPath) {
    header = (
      <h1 className="main-heading">
        <Link to="/">{title}</Link>
      </h1>
    )
  } else {
    header = (
      <Link className="header-link-home" to="/">
        {title}
      </Link>
    )
  }

  if (isRootPath) {
    return (
      <div>
        <div className="global-wrapper" data-is-root-path={isRootPath}>
          <header className="global-header">{header}</header>
          <main>{children}</main>
          <footer>
            © {new Date().getFullYear()}
          </footer>
        </div>
        <a href="https://www.9epoch.com" rel="noopener noreferrer" style={{ position: 'absolute', top: 20, right: 40, color: 'inherit', textDecoration: 'none' }}>
          ← 9epoch.ai
        </a>
      </div>
    )
  } else {
    return (
      <div>
        <div className="global-wrapper" data-is-root-path={isRootPath}>
          <header className="global-header">{header}</header>
          <main>{children}</main>
          <footer>
            © {new Date().getFullYear()}
          </footer>
        </div>
        <a href="/" rel="noopener noreferrer" style={{ position: 'absolute', top: 20, right: 40, color: 'inherit', textDecoration: 'none' }}>
          ← back
        </a>
      </div>
    )
  }
}

export default Layout
