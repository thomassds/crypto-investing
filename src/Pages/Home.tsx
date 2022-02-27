import { useEnterprise } from '../hooks/useEnterprises';

import { Header } from '../Components/Header';
import { InvestimentCard } from '../Components/InvestimentCard';

import '../styles/home.scss';
import { useEffect } from 'react';

export function Home() {
    const { enterprises } = useEnterprise();
    
    return (
        <div className='container-home'>
            <Header/>

            <section className='section-game-home'>            
                <div className='box-game-home'>
                    <div className='list-investiments-game-home'>
                        {enterprises.map(element => 
                            <InvestimentCard enterprise={element}/>   
                        )}
                    </div>
                </div>
            </section>
        </div>
    );
}