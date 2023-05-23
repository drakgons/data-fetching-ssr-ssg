
import { pokeApi } from '../api';


import { Layout } from '../components/layouts'



const HomePage = (props) => {
  
  console.log({props});

  return (
    <>

    <Layout title='Listado de Pokémons'/>
    

    <ul>
      <li>Pokemon</li>
      <li>Pokemon</li>
      <li>Pokemon</li>
      <li>Pokemon</li>
      <li>Pokemon</li>
      <li>Pokemon</li>
      <li>Pokemon</li>
      <li>Pokemon</li>
      
    </ul>

    </>
  )
}


export const getStaticProps = async () => {

  console.log('Hola Currillo');

  const {data} = await pokeApi.get('/pokemon?limit=151');
  // const repo = await res.json();
  // return { props: { repo } };

    console.log(data)



  return {
    props: {
      pokemons: data.results
    }
  }
};
 




export default HomePage;

