import styled from "styled-components";

export const Container = styled.div`
width: 234px;
height: 346px;

border-radius: 8px;

background-color: ${({ theme }) => `${theme.primary}`};

display: flex;
align-items: center;
justify-content: center;

position: relative;

h4 {
    color: ${({ theme }) => theme.text_third};
    opacity: .9;
}

.link {
    position: absolute;
    bottom: 26px;

    color: ${({ theme }) => theme.text_third};
    font-size: 14px;
    
}
/* background-color: azure; */

`