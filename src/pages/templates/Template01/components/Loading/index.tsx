import { ThreeDot } from "react-loading-indicators"
import styled, { useTheme } from "styled-components";


const Container = styled.div`

    width: 100%;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
`;
export const Loading = () => {

    
    return (
        <>
            <Container>
                <ThreeDot color="#007aff" size="small" text="" textColor="" />
            </Container>
        </>
    )
}