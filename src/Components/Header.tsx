import { useAuth } from '../hooks/useAuth';

import '../styles/header.scss';

export function Header() {
    const { user } = useAuth();
    
    return(
        <div className='container-header'>
            <div className='div-logo-header'>
                <h1>Crypto Investing</h1>
            </div>

            <div className='infos-header'>
                <div className='acount-header'>
                    <strong>R$ 1.000.000,00</strong>    
                </div>
                
                <div className='user-header'>
                    <p>{user?.name} {user?.surname}</p>
                </div>
            </div>
        </div>
    )
}