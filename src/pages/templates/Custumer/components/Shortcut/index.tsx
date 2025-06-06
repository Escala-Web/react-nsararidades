import { ReactNode } from "react";
import { Container } from "./styles";

interface ShortcutProps {
    icon: ReactNode,
    title: string,
    link: string,
    description: string
}

export const Shortcut = ({ icon, title, link, description }: ShortcutProps) => {
	return (
		<>
			<Container to={`/custumer/${link ? link : ''}`}>
				<div className="card">
                    {icon}
                    <main>
                        <p>{title}</p>
                        <span>{description}</span>
                    </main>
                </div>
			</Container>
		</>
	);
};
