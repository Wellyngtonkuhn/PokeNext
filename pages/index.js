import Image from "next/image";

import Card from "../componentes/Card";

import styles from "../styles/Home.module.css";

export async function getStaticProps() {
  const maxPokemons = 251;
  const api = "https://pokeapi.co/api/v2/pokemon";

  const res = await fetch(`${api}/?limit=${maxPokemons}`);
  const data = await res.json();

  // adiciona o index do pokemon
  data.results.forEach((item, index) => {
    item.id = index + 1;
  });

  return {
    props: {
      pokemons: data.results,
    },
  };
}

export default function Home({ pokemons }) {
  return (
    <>
      <div className={styles.title_container}>
        <h1 className={styles.title}>
          Poke<span>Next</span>
        </h1>
        <Image
          src={"/imagens/pokeball.png"}
          width={50}
          height={50}
          alt="PokeNext"
        />
      </div>
      <div className={styles.pokemon_container}>
        {pokemons.map((pokemon) => (
          <Card pokemon={pokemon} key={pokemon.id}/>
        ))}
      </div>
    </>
  );
}
