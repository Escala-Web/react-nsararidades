import styled from "styled-components";

export const Container = styled.div`

    margin-top: 1rem;

    .container {
        background-color: ${({ theme }) => theme.color_adm};
        padding: 1rem 2rem;

        height: 140px;

        border-radius: 6px;

        display: flex;
        align-items: center;
        justify-content: space-between;

        @media (max-width: 800px) {
            display: flex;
            flex-direction: column;
        }

    }

    .profile_container {
        display: flex;
        align-items: center;

        gap: 1rem;
        
        @media (max-width: 800px) {
            width: 100%;
            text-align: center;
        }
        
    }

    .profile {

        p {
            font-size: 24px;
            color: ${({ theme }) => theme.text_primary};
            margin-bottom: 2px;

            @media (max-width: 800px) {
                font-size: 18px;
            }
            
        }

        span {
            font-size: 14px;

            color: ${({ theme }) => theme.text_primary};
        }
    }

    .email {
        display: flex;
        align-items: center;

        svg {
            color: ${({ theme }) => theme.text_secondary};
            margin-right: 4px;
        }

        p {
            font-size: 14px;
            color: ${({ theme }) => theme.text_primary};
        }
    }

    .link_my_account {
        background-color: ${({ theme }) => theme.text_third};
        padding: .8rem 1rem;

        border-radius: 6px;
        color: ${({ theme }) => theme.color_text};

        @media (max-width: 800px) {
            width: 100%;
            text-align: center;
        }
        
    }

`;