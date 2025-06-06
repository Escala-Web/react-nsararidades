import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	flex-direction: column;

	gap: 1rem;

	margin-bottom: 0.6rem;

	.container_bannerss {
		width: 100%;
		height: 300px;

		gap: 2rem;

		display: flex;
		flex-direction: column;
		gap: 1rem;

		background-color: aliceblue;
		position: relative;

		border-radius: 12px;

		position: relative;
		overflow: hidden;

		img {
			width: 100%;

			height: 100%;
		}
	}

	.options {
		position: absolute;
		top: 0;
		left: 0;
		background-color: #333;
		color: #fff;

		width: 100%;

		display: flex;
		align-items: center;
		justify-content: space-between;

		padding: .2rem 2rem;
	}

	.opts {
		display: flex;
		align-items: center;
		gap: .4rem;

        div {
            width: 35px;
            height: 35px;

            display: flex;
            align-items: center;
            justify-content: center;

            padding: .4rem;
            background-color:rgba(23, 23, 23, 0.25);

            cursor: pointer;
        }
	}

	p {
		text-align: start;
		width: 100%;
	}
`;
