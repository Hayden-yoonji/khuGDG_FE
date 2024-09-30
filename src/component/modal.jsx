import React from "react";
import {useState} from 'react';
import styled from 'styled-components';

export const ModalContainer = styled.div`
    height : 100%;
    align-items: center;
    justify-content: center;
`;

export const ModalBackdrop = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1;
`;

export const ModalBtn = styled.button`
    background-color: pink;
    padding: 20px;
    border-radius: 30px;
    border:none;
`
export const ModalView = styled.div`
    width: 720px; 
    height: 400px;
    background-color: rgba(0,0,0,0.4);
`;

export const div = styled.div`
`

const Modal = () => {
    const [isOpen, setIsOpen] = useState(false);
    const OpenModalHandler = () => {
        {isOpen === true? setIsOpen(false):setIsOpen(true)}
    };

    return (
        <>
            <ModalContainer>
                <ModalBtn onClick={OpenModalHandler}>
                </ModalBtn>
                {isOpen?
                    <ModalBackdrop onClick={OpenModalHandler}>
                        <ModalView onClick={(e) => e.stopPropagation()}>
                            <div onClick={OpenModalHandler}>X</div>
                        </ModalView>
                    </ModalBackdrop> : null
                }
            </ModalContainer>
        </>
    )
}

export default Modal;