import Image from "next/image";

import styles from "../styles/sobre.module.css";

export default function Sobre() {
  return (
    <div className={styles.sobre}>
      <h1>Sobre o Projeto</h1>
      <p>
        Pellentesque in ipsum id orci porta dapibus. Nulla porttitor accumsan
        tincidunt. Pellentesque in ipsum id orci porta dapibus. Curabitur
        aliquet quam id dui posuere blandit. Nulla porttitor accumsan tincidunt.
        Donec sollicitudin molestie malesuada.
      </p>
      <Image src={'/imagens/charizard.png'} width={300} height={300} alt='charizard' />
    </div>
  );
}
