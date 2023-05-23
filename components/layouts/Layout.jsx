import Head from "next/head";
import { Children } from "react";
import { Navbar } from "../ui";


export const Layout = ({Children, title}) => {
  return (
    <>
    
    <Head>
        <title>{ title || 'PokemonApp Title Layout'}</title>
        <meta name="author" content="Yvan"/>
        <meta name="description" content={`Informacion pokemon ${ title}`} />
        <meta name="keywords" content={` ${title}, pokemon, pokedex`} />
    </Head>


    <Navbar/>

    <main style={{ 
        padding: '0px 20px'
     }}>

        {Children}
    </main>

    </>
  )
}
