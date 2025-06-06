import styled from "styled-components";

export const Container = styled.div`

    /* background-color: aqua; */

    .breadcrumbs {

        width: 100%;
        height: 200px;

        border-radius: 20px;
        background-image: url('https://elements-resized.envatousercontent.com/elements-cover-images/4a84451f-e333-42bf-a55d-67837de9e07a?w=433&cf_fit=scale-down&q=85&format=auto&s=c79681ef9ea575e475dc2f66c230266144a7a4edc36e3616f08313f3cdc9c07a');
    
        position: relative;

        &::after {
            content: '';

            position: absolute;
            left: 0;
            top: 0;

            background-color: #0000004a;

            width: 100%;
            height: 100%;

            border-radius: 20px;
        }
    }

    .container_cards {
        display: flex;
        align-items: center;

        justify-content: space-between;

        flex-wrap: wrap;

        background-color: #fff;
        padding: 1rem;

        box-shadow: 0 0 6px #3333333b;

        border-radius: 8px;
        

        margin-top: 2rem;
    }

    .title {
        font-size: 1.4rem;
        margin-top: 1rem;

        opacity: .9;
        /* font-weight: 600; */
    }

    .logo {
        position: absolute;
        width: 100%;
        height: 100%;

        left: 0;
        top: 0;
    }

    .logo_f {
        position: absolute;
        width: 100%;
        height: 100%;

        left: 0;
        top: 0;
    }

`;