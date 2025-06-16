
import { DataGrid } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';
import { Box } from '@mui/material';
import { IUser } from '../../../../types/IUsers';



const paginationModel = { page: 0, pageSize: 5 };

export const TableUser = ({ data, paginationModel, setPagination, total }: {
  data: IUser; 
  paginationModel: {page: number, pageSize: number};
  setPagination: React.Dispatch<React.SetStateAction<{page:number; pageSize: number;}>>;
  total: number;
 }) => {

  const columns = [
    { field: 'nome_usuario', headerName: 'Nome', width: 200 },
    { field: 'email', headerName: 'E-mail', width: 250 },
    { field: 'telefone', headerName: 'Telefone', width: 180 },
    { field: 'genero', headerName: 'Gênero', width: 100 },
    { field: 'endereco', headerName: 'Endereços', width: 300 },
    { field: 'tipo_de_pessoa', headerName: 'Tipo de Pessoa', width: 150 },
    { field: 'data_de_nascimento', headerName: 'Data de Nascimento', width: 180 },
    { field: 'status', headerName: 'Status', width: 120 },
    { field: 'criacao_de_conta', headerName: 'Data de Criação', width: 180 },
  ];

  const rows = data?.map((user, index) => ({
    id: index + 1,
    nome_usuario: user.username,
    email: user.email,
    telefone: user.phones,
    genero: user.gender,
    endereco: user.addresses,
    tipo_de_pessoa: user.person_type,
    data_de_nascimento: user.dt_birth,
    status: user.status,
    criacao_de_conta: user.created_at,
  }));

  const option = {
    page: 'usersFindAll',
    data: rows
  };

  return (  
    <Box sx={{ padding: '1rem 1rem 2rem', background: '#fff', gap: '1rem', display: 'flex', justifyContent: 'center', flexDirection: 'column', borderRadius: '8px' }}>
      <Paper id='pdf-usersFindAll' sx={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        paginationModel={paginationModel}
        onPaginationModelChange={setPagination}
        paginationMode='server'
        rowCount={total}
        pageSizeOptions={[]}
        sx={{ border: 0 }}
      />
    </Paper>
    </Box>
  );
}