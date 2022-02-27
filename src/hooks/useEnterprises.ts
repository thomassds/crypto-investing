import { useState } from "react"

export function useEnterprise() {
    const [ enterprises, setEnterprises ] = useState([
        {
            id: 1,
            name: "Busisnes Developments",
            level: 1,
            time: 1,
            value: 1
        },
        {
            id: 1,
            name: "Busisnes Developments",
            level: 1,
            time: 1,
            value: 2
        }
    ]);

    function handleUpdateLevelEnterprise(id: number, level: number) {
        let newEnterprises: any = [];

        enterprises.forEach(enterprise => {
            if(enterprise.id == id) {
                return newEnterprises.push({
                    id: id,
                    name: enterprise.name,
                    level: (enterprise.level + level),
                    time: enterprise.time,
                    value: enterprise.value
                })
            }

            newEnterprises.push(enterprise);
        });

        setEnterprises(newEnterprises);
    }
    return { enterprises, handleUpdateLevelEnterprise }
}