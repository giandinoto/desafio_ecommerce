import React, { useEffect, useState } from 'react'
import { ItemDetail } from './ItemDetail'
import { useParams } from 'react-router-dom'
export const ItemDetailContainer = () => {

    const [product, setProduct] = useState({})
    const { idProducto } = useParams()
    const [loader, setLoader] = useState(true)


    useEffect(() => {

        fetch(`https://fakestoreapi.com/products/${idProducto}`)

            .then((respuesta) => {
                if (respuesta.ok) {
                    //console.log("respuesta producto ok")
                    return respuesta.json()
                }

            })
            .then((respuesta) => {
                setProduct(respuesta)
                //console.log(respuesta)
            })
            .catch(
                error => console.log(error)
            )
            .finally(() => {

                setLoader(false)
            })

    }, [])

    if (loader) {

        return (
            <>
                <h1>Loading...</h1>
            </>
        )

    } else {
        return (

            <section>
                <ItemDetail
                    id={product.id}
                    title={product.title}
                    image={product.image}
                    description={product.description}
                    category={product.category}
                />
                
         </section>
        )
    }
}

export default ItemDetailContainer