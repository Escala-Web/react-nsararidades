import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import { Container } from "./styles";
import { FolderAdd } from "./ui/FolderAdd";
import { Checkbox, CircularProgress, List } from "@mui/material";
import { FaArrowLeft } from "react-icons/fa";
import { FcFile, FcFolder } from "react-icons/fc";
import { useFolder } from "../../../../hooks/FileManger/useFolder";
import { IFoldersContentResponse } from "../../../../types/IFolders";
import { Setting } from "./ui/Setting";
import { useFiles } from "../../../../hooks/FileManger/useFiles";
import { IoClose } from "react-icons/io5";
import { URL_HOST } from "../../../../config/configUrl";
import { LuRefreshCcw } from "react-icons/lu";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
import { PicturesContext } from "../../../../context/FileManager";
import { MdClose } from "react-icons/md";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "95vw",
  maxWidth: "1400px",
  height: "90vh",
  bgcolor: "background.paper",
  border: "2px solid #414141",
  boxShadow: 24,
  borderRadius: 4,
  p: 2,
  overflow: "auto",
};

interface FileManagerProps {
  id: number;
  title: string;
  isEdit: boolean;
  dataEdit: object;
  imagesFind?: [];
}

export const FileManager = ({
  id: idVariation,
  title,
  isEdit = false,
  dataEdit,
  imagesFind,
}: FileManagerProps) => {
  const [open, setOpen] = React.useState(false);
  const [currentPath, setCurrentPath] = React.useState("root");
  const [id_folder, setId_folder] = React.useState(1);
  const [folderHistory, setFolderHistory] = React.useState<number[]>([1]);
  const [isPageFile, setIsPageFile] = React.useState(false);
  const modalRef = React.useRef<HTMLDivElement | null>(null);

  const [loading, setLoading] = React.useState(false);

  const { findAllFolders } = useFolder();
  const { data, isPending, error, mutate } = findAllFolders;
  const { createFile } = useFiles();
  const {
    images,
    handleAddPictures,
    handleRemovePicture,
    setMainImage,
    mainImages,
  } = React.useContext(PicturesContext)!!;

  const handleOpen = () => setOpen(true);

  const handleClose = () => {
    resetState();
    setOpen(false);
  };

  const resetState = () => {
    setCurrentPath("root");
    setFolderHistory([1]);
    setId_folder(1);
  };

  const openFolder = (folderName: string, id: number) => {
    setCurrentPath(folderName);
    setId_folder(id);
    setFolderHistory((prev) => [...prev, id]);
  };

  const goBack = () => {
    if (folderHistory.length > 1) {
      const newHistory = [...folderHistory];
      newHistory.pop();
      const previousId = newHistory[newHistory.length - 1];
      setFolderHistory(newHistory);
      setId_folder(previousId);
      setCurrentPath(previousId === 1 ? "root" : previousId.toString());
    }
  };

  React.useEffect(() => {
    mutate({ parent_id: id_folder, is_trash: isPageFile });
    setLoading(false);
  }, [id_folder, isPageFile, loading]);

  React.useEffect(() => {
    const handleContextMenu = (e: MouseEvent) => e.preventDefault();
    const modalElement = modalRef.current;

    if (modalElement) {
      modalElement.addEventListener("contextmenu", handleContextMenu);
      return () =>
        modalElement.removeEventListener("contextmenu", handleContextMenu);
    }
  }, []);

  const handleAddFiles = () => {
    const fileInput = document.createElement("input");
    fileInput.type = "file";
    fileInput.multiple = true;
    fileInput.click();

    fileInput.addEventListener("change", (event: Event) => {
      const target = event.target as HTMLInputElement;
      const files = target.files;

      if (files) {
        const formData = new FormData();
        formData.append("id_folder", id_folder.toString());

        Array.from(files).forEach((file) => {
          formData.append("files[]", file);
        });

        createFile.mutate(formData);
        setLoading(true);
      }
    });
  };

  const [localImagesFind, setLocalImagesFind] = React.useState(
    imagesFind || []
  );

  if (error) return <div>Erro ao carregar as pastas!</div>;

  const currentContent = data?.content || [];

  const deleteImageFromFind = (idToRemove) => {
    setLocalImagesFind((prev) =>
      prev.filter((img) => img.id_media !== idToRemove)
    );
  };

  return (
    <>
      <Button
        variant="contained"
        onClick={handleOpen}
        sx={{ marginTop: ".4rem" }}
      >
        <AddAPhotoIcon sx={{ marginRight: "10px", fontSize: "16px" }} />
        {title}
      </Button>

      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          <Container>
            <div className="container_header">
              <h4 className="titleFileManager">Gerenciador de Mídia</h4>
              <div className="actions">
                <span onClick={handleClose} style={{ backgroundColor: "red" }}>
                  <MdClose color="white" />
                </span>
                <FolderAdd idFolder={id_folder} />
                <span onClick={() => setLoading(true)}>
                  <LuRefreshCcw />
                </span>
                <span onClick={handleAddFiles}>Upload de arquivos</span>
              </div>
            </div>

            <div ref={modalRef} className="container_file_manager">
              <div className="header_file_manager">
                <p onClick={() => setIsPageFile(false)}>Arquivos</p>
                <p onClick={() => setIsPageFile(true)}>Lixeira</p>
              </div>

              <List className="folder_container">
                {!isPending && (
                  <div className="info">
                    {currentPath !== "root" && (
                      <Button onClick={goBack} startIcon={<FaArrowLeft />}>
                        Voltar
                      </Button>
                    )}
                    <p>{currentPath === "root" ? "Arquivos" : currentPath}</p>
                  </div>
                )}

                <div className="folder_list" style={{ marginTop: "2rem" }}>
                  {isPending ? (
                    <div className="container_loading">
                      <CircularProgress size="4rem" />
                    </div>
                  ) : (
                    currentContent.map((item: IFoldersContentResponse) => (
                      <React.Fragment key={item.id}>
                        {item.type === "folder" ? (
                          <div className="card">
                            <div
                              className="card_media"
                              // double click retirado
                              onClick={() => openFolder(item.name, item.id)}
                            >
                              <FcFolder />
                              <p>{item.name}</p>
                            </div>
                            <Setting
                              idFolder={item.id}
                              isPageFile={isPageFile}
                            />
                          </div>
                        ) : (
                          <div
                            className="cart"
                            onClick={() => handleAddPictures(item, idVariation)}
                          >
                            <div className="card_media">
                              <img
                                style={{ objectFit: "cover" }}
                                src={`${URL_HOST}${item.file_path}`}
                              />
                              <p>{item.name}</p>
                            </div>
                          </div>
                        )}
                      </React.Fragment>
                    ))
                  )}
                </div>
              </List>

              <div className="container_image_select">
                <div className="info_select">
                  <div>
                    <p>Arquivos selecionados</p>
                    <div
                      className="folder_list folder_list_image_selected"
                      style={{ width: 320, marginTop: "2rem" }}
                    >
                      <>
                        {isEdit && (
                          <>
                            {/* <div className="card">
															{dataEdit?.map((item) => (
																<>
																	<div className="card_media">
																		<img
																			src={`${URL_HOST}${item.image_path}`}
																			alt={item.name}
																		/>
																	</div>
																	<div className="close">
																		<IoClose />
																	</div>
																</>
															))}
														</div> */}
                          </>
                        )}
                        <>
                          {localImagesFind?.map((img) => {
                            return (
                              <div className="card" key={img?.id_media}>
                                <div className="card_media">
                                  <img
                                    src={`${URL_HOST}${img.image_path}`}
                                    alt=""
                                  />
                                  {/* <p>{img.picture.name}</p> */}
                                </div>

                                <div
                                  className="close"
                                  onClick={() =>
                                    deleteImageFromFind(img.id_media)
                                  }
                                >
                                  <IoClose />
                                </div>

                                <div className="principal">
                                  <Checkbox
                                    checked={
                                      mainImages[idVariation] === img.id_media
                                    }
                                    onChange={() =>
                                      setMainImage(idVariation, img.id_media)
                                    }
                                  />
                                </div>
                              </div>
                            );
                          })}
                        </>

                        <>
                          {images
                            ?.filter(
                              (item) => item.id_variation === idVariation
                            )
                            ?.map((img) => {
                              return (
                                <div className="card" key={img.picture.id}>
                                  <div className="card_media">
                                    <img
                                      src={`${URL_HOST}${img.picture.file_path}`}
                                      alt=""
                                    />
                                    <p>{img.picture.name}</p>
                                  </div>

                                  <div
                                    className="close"
                                    onClick={() =>
                                      handleRemovePicture(
                                        img.picture.id,
                                        idVariation
                                      )
                                    }
                                  >
                                    <IoClose />
                                  </div>

                                  <div className="principal">
                                    <Checkbox
                                      checked={
                                        mainImages[idVariation] ===
                                        img.picture.id
                                      }
                                      onChange={() =>
                                        setMainImage(
                                          idVariation,
                                          img.picture.id
                                        )
                                      }
                                    />
                                  </div>
                                </div>
                              );
                            })}
                        </>
                      </>
                    </div>
                  </div>

                  <Button
                    variant="contained"
                    onClick={() => {
                      resetState();
                      setOpen(false);
                      // toast.success("Imagens adicionadas com sucesso");
                    }}
                  >
                    Adicionar
                  </Button>
                </div>
              </div>
            </div>
          </Container>
        </Box>
      </Modal>
    </>
  );
};
