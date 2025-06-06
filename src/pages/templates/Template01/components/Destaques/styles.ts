import styled from "styled-components";

export const Container = styled.div`

    width: 100%;
    /* height: 600px; */

    background-color: ${({ theme }) => theme.text_third};

    padding: 2rem 1rem;

    .container_images {
        padding-top: 2rem;

        display: flex;
        align-items: center;

        justify-content: space-between;
        box-sizing: border-box;

        @media (max-width: 768px) {
            flex-direction: column;
            gap: .4rem;
    }
    }

    .image {
        /* background-color: aqua; */

        width: 33%;
        height: 320px;

        border-radius: 8px;

        /* padding: 1rem; */

        box-shadow: 0 0 3px ${({ theme }) => theme.text_secondary};

        overflow: hidden;
        transition: .2s;

         
        background-color: ${({ theme }) => `${theme.accent}20`};
        background-size: cover;
        background-position: center;
        position: relative;


        &::before {
            content: "";
            position: absolute;
            inset: 0;
            background-color: rgba(0, 0, 0, 0.26);
            
        }

        @media (max-width: 768px) {
            width: 100%;
    }
        
    }

    .content {
        background-image: ${({ theme }) => `linear-gradient(to bottom, rgba(0, 0, 0, 0.03), ${theme.primary})`};



        padding: 1rem;
        position: absolute;
        bottom: 0;
        width: 100%;

        display: flex;
        flex-direction: column;
        
        gap: 1rem;

        

        a {
            background-color: ${({ theme }) => theme.text_third};
            color: ${({ theme }) => theme.text_primary};
            font-weight: 600;
            border-radius: 10px;
            padding: .6rem 1rem;
            width: 40%;
            display: flex;
            justify-content: center;
            align-items: center;
        }
    }

    .name_product {
        font-size: 16px;
        font-weight: 600;
        color: ${({ theme }) => theme.text_third};

        opacity: .9;
    }

    .price {
        font-size: 26px;
        font-weight: 600;
        color: ${({ theme }) => theme.text_third};
    }

`;