import { useOnboarding } from "../../hooks/Onboarding/useOnboarding";
import { useStore } from "../../hooks/Store/useStore";
import { DashboardTemplate } from "../DashboardTemplate";

export const ActiveStriper = ({ reason }) => {
	console.log(reason);

	const { findAllStore } = useStore();
	const { onBoarding } = useOnboarding();

	const handleOnBoarding = () => {
		onBoarding.mutate(undefined, {
			onSuccess: (data) => {
				if (data?.redirect_url) {
					window.open(data.redirect_url, "_blank");
				} else {
					console.error("URL de redirecionamento não encontrada.");
				}
			},
			onError: (error) => {
				console.error("Erro ao iniciar onboarding:", error);
			},
		});
	};

	return (
		<>
			<DashboardTemplate description="Escala Web é parceira da Stripe para pagementos seguros.">
				{reason === "inactive" ? (
					<>
						<>
							<div className="title">
								<h1>Conta Stripe em validação</h1>
								<p>
									Sua conta Stripe foi criada, mas ainda está sendo validada.
									<br />A validação pode levar de <strong>1 a 2 dias uteis</strong>.
									Por favor, aguarde enquanto a Stripe verifica suas
									informações.
								</p>
							</div>
						</>
					</>
				) : (
					<>
						<div className="title">
							<h1>Conecte Sua Conta Stripe</h1>
							<p>
								Para começar a receber pagamentos de forma segura, conecte sua
								conta Stripe com apenas alguns cliques.
							</p>
						</div>
						<button onClick={handleOnBoarding}>Conectar com Stripe</button>
					</>
				)}
			</DashboardTemplate>
		</>
	);
};
