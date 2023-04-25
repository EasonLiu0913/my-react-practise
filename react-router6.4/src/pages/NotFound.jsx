import React, { useEffect } from "react"
import { useNavigate, useRouteError } from "react-router-dom"

const NotFound = () => {
  const navigate = useNavigate()
  const error = useRouteError()
  useEffect(() => {
    setTimeout(() => {
      navigate("/")
    }, 5000)
  }, [])

  return (
    <>
      <h1>404 Not Found Page</h1>
      <p>錯誤：{error.error.message}</p>
      <p>5秒後自動回首頁</p>
    </>
  )
}

export default NotFound
