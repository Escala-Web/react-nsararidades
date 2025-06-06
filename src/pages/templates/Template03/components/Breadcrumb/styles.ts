import styled from "styled-components";

export const Container = styled.div`
    position: relative;
    width: 100%;
    padding: 1.4rem 2rem;
    overflow: hidden;
    /* border-radius: 16px; */
    background: ${({ theme }) => `linear-gradient(135deg, ${theme.background}, ${ theme.primary})`};
    background-size: 200% 200%;
    animation: gradientAnimation 10s ease infinite;
    color: #fff;
    z-index: 1;

    display: flex;
    align-items: center;
    justify-content: center;

    &::before,
    &::after {
        content: "";
        position: absolute;
        border-radius: 50%;
        opacity: 0.2;
        z-index: 0;
        filter: blur(40px);
    }

    &::before {
        width: 300px;
        height: 300px;
        background: ${({ theme }) => theme.accent};
        top: -100px;
        left: -100px;
        animation: float 8s infinite ease-in-out;
    }

    &::after {
        width: 250px;
        height: 250px;
        background: ${({ theme }) => theme.accent};
        bottom: -80px;
        right: -80px;
        animation: float2 10s infinite ease-in-out;
    }

    @keyframes gradientAnimation {
        0% {
            background-position: 50% 50%;
        }
        50% {
            background-position: 100% 50%;
        }
        100% {
            background-position: 50% 50%;
        }
    }

    @keyframes float {
        0% {
            transform: translateY(0px) translateX(0px);
        }
        100% {
            transform: translateY(20px) translateX(20px);
        }
    }

    @keyframes float2 {
        0% {
            transform: translateY(0px) translateX(0px);
        }
        100% {
            transform: translateY(-20px) translateX(-15px);
        }
    }

    .container {
        max-width: 1440px;
        width: 100%;
    }

    .links {
        display: flex;
        align-items: center;

        gap: 1rem;

        a {
            color: ${({ theme }) => theme.text_third}
        }

        p {
            color: ${({ theme }) => theme.text_third}
        }
    }
`;
