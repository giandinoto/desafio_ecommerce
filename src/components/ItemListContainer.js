import React, { useEffect, useState } from 'react'
import { ItemDetail } from './ItemDetail'
import { useParams } from "react-router-dom"
import ItemList from './ItemList'



export const ItemListContainer = () => {

    const [productos, setProductos] = useState([])
    const [loader, setLoader] = useState(true)
    const {idCategoria} = useParams()

    useEffect(() => {

        //console.log(idCategoria)

        if(idCategoria){

            var  elfetch = `https://fakestoreapi.com/products/category/${idCategoria}`;
        }else {

            var  elfetch = 'https://fakestoreapi.com/products?limit=6';

        }
            
        


        fetch(elfetch)

            .then((respuesta) => {
                if (respuesta.ok) {
                    //console.log("respuesta ok")
                    return respuesta.json()
                }

            })
            .then((respuesta) => {
                setProductos(respuesta)
                //console.log(respuesta)
            })
            .catch(
                error => console.log(error)
            )
            .finally(() => {

                setLoader(false)
            })

    }, [idCategoria])

    if (loader) {

        return (
            <>
                <h1>Loading...</h1>
            </>
        )

    } else {
        return (

            <section >
                {productos.map(producto => {

                    return (
                        <ItemList
                            key={producto.id}
                            id={producto.id}
                            title={producto.title}
                            image={producto.image}
                            category={producto.category}
                        />

                    )
                })
                }

            </section>
        )

    }

}

export default ItemListContainer