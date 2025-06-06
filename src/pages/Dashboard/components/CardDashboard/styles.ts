import styled from "styled-components";

export const Card = styled.div`

    background-color: #fff;
    border: 1px spolid #e0e0e0;
    border-radius: 8px;
    padding: 1rem;

    display: flex;
    flex-direction: column;

    justify-content: space-between;

    gap: .6rem;

    width: ${({ w }: any) => w || '24.1%'};

    height: 150px;

    transition: .2s;

    cursor: pointer;

    width: 100%;

    &:hover {
        transform: scale(1.05);
        border: 1px solid #e0e0e0;
    }

    ${({ isActive }:any) => isActive && `
        transform: scale(1.05);
        border: 1px solid #e0e0e0;
        
    `}

    .card_container {
        display: flex;
        align-items: center;

        justify-content: space-between;
    }

    .card_content {
        /* background-color: aqua; */

        p {
            font-size: 20px;
            font-weight: 500;

            color: #565656;
        }

        h1 {
            font-size: 32px;
            font-weight: 500;

            color: #565656;
        }
    }

    .card_icon {
    width: 80px;
    height: 80px;
    background-color: ${({ color }) => color ? color+'14' : "#f0f0f0"};

    
    position: relative; /* Necessário para o posicionamento do ícone */
    
    display: flex;
    align-items: center;
    justify-content: center;
    
    border-radius: 10px;

    .icon {
        position: absolute;
        top: 0;
        left: 0;
        
        width: 100%;
        height: 100%;
        
        display: flex;
        align-items: center;
        justify-content: center;
        
        z-index: 1; /* Coloca o ícone acima do fundo */
        opacity: 1; /* Garante que o ícone tenha opacidade total */

        svg {
            font-size: 36px;
            color: ${({ color }) => color ? color : "red"};
        }
    }
}

.card_footer {

    text-align: start;

    padding: .4rem 0 .1rem;

    border-top: 1px solid #e0e0e0;
    box-sizing: border-box;

    display: flex;
    align-items: center;
    gap: .5rem;

    p {
        font-size: 14px;
        font-weight: 500;

        color: #565656;

        span {
            color: #00b300;
        }
    }
}


`;