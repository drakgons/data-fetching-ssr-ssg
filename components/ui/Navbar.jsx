import { Text, Spacer, useTheme } from '@nextui-org/react';
import Image from 'next/image';


export const Navbar = () => {

    const { theme } = useTheme();

    // console.log(theme);  //Ver colores y otras cosas de NextUI 

  return (
    <div style={{ 
        display: 'flex',
        width: '100%',
        flexDirection: 'row',
        alignItems: 'start',
        padding: '0px 20px',
        backgroundColor: theme?.colors.gray50.value
     }}>

        <Image
            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/132.png"
            alt="Icono del Poke"
            width={50}
            height={50}
        />

        {/* <Text color='white' h2>p</Text> */}
        <Text color='white' h3>okemon</Text>

        <Text
            h1
            size={25}
            css={{
            textGradient: "45deg, $blue600 -20%, $pink600 50%",
            }}
            weight="bold"
        >
        Hola Mundooo!
        </Text>

        <Spacer css={{ flex: 1 }}/>

        <Text color='white'>Favoritos</Text>
    </div>
  )
}
