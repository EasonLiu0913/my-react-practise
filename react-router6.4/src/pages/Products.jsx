import React from "react"
import { useLoaderData, useNavigation } from "react-router-dom"

const Products = () => {
  const navigation = useNavigation()
  const products = useLoaderData()

  if (navigation.state === "loading") {
    return <h1>Loading...</h1>
  }

  return (
    <>
      {products.products.map((item) => {
        return (
          <div key={item.id}>
            <h2>{item.title}</h2>
            <p>{item.description}</p>
            <img width={100} src={item.thumbnail} />
          </div>
        )
      })}
    </>
  )
}

export default Products

export const dataLoader = async () => {
  const res = await fetch("https://dummyjson.com/products?limit=5")
  const productsData = await res.json()
  return productsData
}
