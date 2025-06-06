import styled from "styled-components";

export const Container = styled.div`

margin-top: 4rem;

    width: 100%;
    background-color: ${({ theme }) => theme.text_secondary} !important;;

    background-color: aqua;

    display: flex;
    align-items: start;
    justify-content: center;

    height: 250px;
    padding: 3rem 0 1rem;

    .container {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 30px;
    /* background-color: #222; */
    background-color: ${({ theme }) => theme.text_secondary} !important;;
    color: white;
    /* padding: 40px; */
}

.footer-col h4 {
    margin-bottom: 15px;
    font-size: 16px;
}

.footer-col ul {
    list-style: none;
    padding: 0;
    margin: 0;
}

.footer-col ul li a {
    color: #ccc;
    text-decoration: none;
    margin-bottom: 10px;
    display: block;
}

.footer-col p {
    margin: 5px 0;
    font-size: 14px;
}

.footer-col iframe {
    border: 0;
    border-radius: 8px;
}

.logo img {
    max-width: 100%;
}


`;