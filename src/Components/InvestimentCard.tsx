import { useEffect, useState } from 'react';
import { useEnterprise } from '../hooks/useEnterprises';

import '../styles/investiment-card.scss';

type Enterprise = {
    id: number,
    name: string,
    level: number,
    time: number,
    value: number | 0
}

type InvestimentCardProps = { 
    enterprise: Enterprise
}

export function InvestimentCard(props: InvestimentCardProps) { 
    let { enterprise } = props;
    const { handleUpdateLevelEnterprise } = useEnterprise();
    const [money, setMoney] = useState(0);
    const [manager, setManager] = useState(false);

    function handleMiner() {
        setMoney(money + enterprise.value);
    }

    const managerEnterprise = setTimeout(() => {
        setMoney(money + enterprise.value);
    }, 1000); 

    useEffect(() => {
        if(!manager) {

        }
    }, [manager]);
    return (
        <div className='card-investiment'>
            <div className='image-card-investiment' onClick={() => setTimeout(handleMiner, (enterprise.time * 1000))}>
                <img src={""}/>
            </div>

            <div className='infos-card-investiment'>
                <div className='line-1-infos-card-investiment'>
                    <div className='time-card-investiment'>
                        <p>R$ {enterprise?.value} / {money}</p>
                    </div>

                    <div className='button-claim-card-investiment' onClick={() => console.log('teste')}>
                        <p>Man</p>
                    </div>
                </div>
                <div className='button-card-investiment' onClick={() => handleUpdateLevelEnterprise(enterprise.id, 1)}>
                    <p>{enterprise?.value}X</p>
                </div>
            </div>
        </div>
    )
}