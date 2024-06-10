import { useState } from "react";
import { styles } from './login.module.css'
import { useNavigate } from 'react-router-dom';

export function Login() {
    const [userEmail, setUserEmail] = useState('')
    const [userPassword, setUserPassword] = useState('')

    const textTitleStart = { fontSize: '2em', fontWeight: '600', color: '#393960', textAlign: 'center' }

    const navigate = useNavigate();

    function handleOnSubmit(event) {
        event.preventDefault();
        console.log('enviando dados para login');

        if (userEmail === '2@2' && userPassword === '2') {
            navigate('/home', { replace: true });
            //fazer a função para conferir no back end
        }
        else {
            alert('Usuário ou senha inválidos')
        }
        setUserEmail('')
        setUserPassword('')
    }

    return (
        <div className="container">
            <h2 style={{ ...textTitleStart }}>Entrar</h2>
            <form onSubmit={handleOnSubmit}>
                <input type="email" value={userEmail} placeholder="Email" onChange={(event) => setUserEmail(event.target.value)} />
                <input type="text" value={userPassword} placeholder="Senha" onChange={(event) => setUserPassword(event.target.value)} />
                <button className="btn waves-effect waves-light light-blue accent-4" type="submit" name="action">Entrar</button>
            </form>
        </div>
    )
}
