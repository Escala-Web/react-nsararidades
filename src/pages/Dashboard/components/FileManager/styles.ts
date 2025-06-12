import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  .container_header {
    /* background-color: aqua; */
    height: 40px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    border-bottom: 1px solid #ccc;

    h4 {
      font-size: 1.2rem;
    }
  }

  .principal {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;

    /* background-color: #ed3237; */

    position: absolute;
    top: 0;

    height: 86%;

    width: 100%;
    z-index: 9;
  }

  .actions {
    /* background-color: aqua; */

    display: flex;
    flex-direction: row-reverse;
    justify-content: end;
    gap: 0.2rem;

    padding-bottom: 1rem;

    span {
      padding: 0.2rem 1rem;
      /* background-color: aqua; */

      cursor: pointer;

      color: #333;
      font-weight: 600;
      font-size: 12px;

      border-radius: 4px;
      border: 1px solid #ccc;

      display: flex;
      align-items: center;
      justify-content: center;

      svg {
        font-size: 1.4rem;
        background-color: transparent;

        color: #333;
        opacity: 0.9;
      }
    }
  }

  .container_file_manager {
    display: flex;
    align-items: start;

    gap: 0.8rem;

    padding-top: 1rem 2rem;

    /* background-color: #bd9834; */

    height: 64vh;
    /* overflow-x: scroll; */
    /* overflow: hidden; */

    /* height: 100%; */
  }

  .header_file_manager {
    width: 180px;

    display: flex;
    flex-direction: column;

    border-right: 1px #ccc solid;
    height: 60vh;
    /* gap: .6rem; */

    p {
      font-size: 16px;
      font-weight: 400;
      color: #333;

      cursor: pointer;

      padding: 0.8rem 0;

      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;

      &:hover {
        background-color: #f4f4f4;
      }
    }
  }

  .folder_list {
    display: flex;
    /* align-items: center; */
    overflow-y: scroll;
    flex-wrap: wrap;
    gap: 0.6rem;
    position: relative;
    margin-top: 2rem;
    width: 47vw;
    max-width: 800px;
    height: 65vh;

    @media (min-width: 1285px) and (max-width: 1440px) {
      width: 54vw;
    }

	@media (max-width: 1024px) {
		width: 70vw;
		padding-bottom: 20rem;
	}

	@media (max-width: 768px) {
		width: 72vw;
	}

	@media (max-width: 425px) {
		width: 56vw;
	}
  }

  .info {
    display: flex;
    align-items: center;

    gap: 0.6rem;
  }

  .card_media {
    cursor: pointer;

    height: 100px;
    width: 100px;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-between;

    overflow: hidden;

    margin-top: 1rem;

    img {
      height: 100px;
      width: 100%;
      overflow: hidden;
      object-fit: cover;

      border-radius: 8px;
    }

    p {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;

      width: 80px;

      text-align: center;
    }

    svg {
      font-size: 4.8rem;
      background-color: transparent;
    }
  }

  .container_loading {
    /* background-color: #bd9834; */
    width: 100%;

    position: absolute;

    left: 0;
    top: 0;
    width: 100%;
    max-width: 1180px;

    height: 560px;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  .container_settings {
    background-color: transparent;
    width: 100%;

    display: flex;
    align-items: center;
    /* justify-content: start; */
    top: 0;
    position: absolute;
  }

  .card {
    position: relative;
  }

  .btn_setting {
    background-color: transparent;
    color: #333;
    display: flex;
    align-items: center;
    justify-content: end;

    width: 100%;

    font-weight: 800;
  }

  .container_image_select {
    width: 320px;
    background-color: #f4f4f4;
    height: 70vh;
    border-radius: 6px;
    margin-top: 2rem;
    position: absolute;
    right: 1rem;

	@media (max-width: 1024px) {
		position: fixed !important;
		bottom: 0px;
		width: 68vw;
		height: 30vh;
		right: 4rem;
	}

	@media (max-width: 768px) {
		right: 2rem;
	}

	@media (max-width: 425px) {
		width: 93vw;
		right: 0;
	}

	@media (max-width: 380px) {
		width: 90vw;
		right: 10px;
		bottom: 1.5rem;
	}
  }

  .info_select {
    padding: 0.6rem;
    text-align: center;

    display: flex;
    flex-direction: column;

    justify-content: space-between;

    height: 100%;
  }

  .close {
    position: absolute;
    top: 10px;
    right: 0px;

    background-color: #ed3237;

    width: 25px;
    height: 25px;

    border-radius: 50%;

    z-index: 9999999999999;

    display: flex;
    align-items: center;
    justify-content: center;

    cursor: pointer;

    transition: 0.2s;

    &:hover {
      transform: scale(1.02);
    }

    svg {
      color: #fff;
      font-weight: bold;
    }
  }

  @media (max-width: 1024px) {
	  .folder_list_image_selected{
		height: 17vh;
		padding-bottom: 0;
	  }
  }

  @media (max-width: 426px) {
	.titleFileManager{
		display: none;
	}
  }
`;
