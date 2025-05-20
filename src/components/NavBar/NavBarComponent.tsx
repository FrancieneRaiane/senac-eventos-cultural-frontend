import styles from './NavBar.module.css';
import { Link } from "react-router";
import { useAuth } from "../../contexts/AuthContext";



export default function NavBarComponent(){
    const {user, logout} = useAuth()
    
    return (
        <nav className={styles.menu}>
            <div className={styles.logo}>Logo</div>

            <div className={styles ['nav-links']}>
                {user ?(
                    <>
                    <Link to= "/eventos">Eventos</Link>
                    <Link to= "/meu-eventos">Meus Eventos</Link>
                    {user.role === 'organizer' && (
                        <Link to="/painel-eventos">Painel de Eventos</Link>
                    )}
                    {/* so chama logout, sem to="-" */}
                    <button onClick={logout}>Sair</button>

                    </>
                
                ): (
                    <>
                    <Link to="/login">login</Link>
                    <Link to="/register"> Cadastro</Link>
                    </>

                )}

            </div>
        </nav>
    )
}