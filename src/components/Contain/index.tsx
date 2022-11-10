import React, { useCallback, useState } from 'react';
import {ContainerHeader, ContainerDiv} from './styles'
import {WiMoonAltWaningCrescent1} from 'react-icons/wi'


export const Container: React.FC = () => {
    const [isActive, setIsActive] = useState(false)

    const setValue = useCallback(() => {
        setIsActive(!isActive)
    }, [isActive])

    return(
        <>  
            <ContainerHeader isTrue={isActive}>
                <div>Logo</div>

                <button onClick={setValue}>
                    <WiMoonAltWaningCrescent1 />
                </button>
            </ContainerHeader>


            <ContainerDiv isTrue={isActive}></ContainerDiv>
        </>
    );
}