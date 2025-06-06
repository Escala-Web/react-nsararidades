import { ThreeDot } from "react-loading-indicators";
import styled from "styled-components";

const Container = styled.span`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

interface LoadingRegProps {
  title: string;
  color?: string;
}

export const LoadingReg = ({ title, color }: LoadingRegProps) => {
  return (
    <Container style={{ color: color || '#fff' }}>
      {title}
      <div style={{ transform: "scale(0.4)", transformOrigin: "left center" }}>
        <ThreeDot
          color={color || "#fff"}
          size="6px"
          text=""
          textColor=""
        />
      </div>
    </Container>
  );
};
