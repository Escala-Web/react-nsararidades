import styled from "styled-components";

export const Container = styled.div`

    position: relative;

    width: 60%;

    .search_container {
        position: relative;

        display: flex;
        align-items: center;
        justify-content: center;

        input {
            width: 100%;
            height: 40px;

            display: flex;
            align-items: center;

            padding: 1rem;

            outline: 0;

            border: 1px solid ${({ theme }) => theme.text_third};

            border-radius: 4px;
        }
    }

    .icon {
        position: absolute;
        right: 0px;

        background-color: ${({ theme }) => theme.accent};

        height: 100%;
        width: 80px;

        display: flex;
        align-items: center;
        justify-content: center;

        /* border-radius: 50%; */

        svg {
            color: ${({ theme }) => theme.text_third};
        }
    }

    .results {
        position: absolute;

        top: 40px;
        left: 0;

        z-index: 99999999;

        background-color: ${({ theme }) => theme.background};

        
        border: 1px solid ${({ theme }) => theme.primary};
        border-top: none;

        width: 100%;

        ul li {
            padding: .3rem 1rem;
            
            &:hover {
                background-color: #f1f1f1;
            }

            a {
                color: ${({ theme }) => theme.text_secondary};

                cursor: pointer;
            }
        }
    }

`;