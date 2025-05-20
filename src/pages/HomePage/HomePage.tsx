import ButtonComponent from '../../components/ButtonComponent/ButtonComponet'
import NavBarComponent from '../../components/NavBar/NavBarComponent'
import styles from './HomePage.module.css'

function HomePage() {

  return (
  
      <div>
        <NavBarComponent />
          <div className={styles.container}>
            <h1 className={styles.title}>Senac Eventos Culturais</h1>
            <br>
            </br>
            <p className={styles.subtitle}>Seja bem-vindo!</p>
            <ButtonComponent text={"Clique Aqui"} type='submit' />
          </div>
      </div>
      
  );
}

export default HomePage;