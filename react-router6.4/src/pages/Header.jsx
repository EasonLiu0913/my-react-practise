import React from "react"
import { Link, Outlet } from "react-router-dom"

const Header = () => {
  return (
    <>
      <nav>
        <span
          style={{
            marginRight: "5px",
            paddingRight: "5px",
            borderRight: "1px solid #000",
          }}
        >
          <Link to="/">Home</Link>
        </span>

        <span>
          <Link to="/products">Products</Link>
        </span>
      </nav>
      <Outlet />
    </>
  )
}

export default Header
