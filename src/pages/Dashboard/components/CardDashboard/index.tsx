import { Card } from "./styles";

interface CardDashboardProps {
  name?: string;
  icon?: React.ReactNode;
  click?: () => void;
  color?: string;
  isActive?: boolean;
  data?: string | number;
}

export const CardDashboard: React.FC<CardDashboardProps> = ({
  name = "Default Name",
  icon,
  click,
  color = "#ffffff",
  isActive = false,
  data = 0,
}) => {
  return (
    <Card isActive={isActive} color={color} onClick={click}>
      <div className="card_container">
        <div className="card_content">
          <p>{name}</p>
          <h1>{data}</h1>
        </div>
        <div className="card_icon">
          <div className="icon">{icon || "📊"}</div>
        </div>
      </div>
      <div className="card_footer">
        <p>
          <span>8.5% Up</span> acima de ontem
        </p>
      </div>
    </Card>
  );
};
