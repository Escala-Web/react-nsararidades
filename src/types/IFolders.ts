export interface IFoldersGet {
    parent_id: number,
    is_trash: boolean
}

export interface IFoldersContentResponse {
    id: number;
    name: string;
    type: 'folder' | 'file';
    file_type?: string;
    file_path?: string;
}

export interface IFolderResponse {
    success: boolean;
    content: IFoldersContentResponse[];
    message?: string
  }



  export interface IFolderCreate {
    parent_id: number,
    folder_name: string
  }


  export interface IFolderUpdate {
    id_folder: number,
    folder_name: string
  }


  export interface IFolderMoveTrash {
    id_folder: number
  }