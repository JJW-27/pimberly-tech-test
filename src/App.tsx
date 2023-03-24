import { useState } from 'react';
import { repositorySearch } from './api';
import { DataGrid } from '@mui/x-data-grid';

function App() {
  const [keyword, setKeyword] = useState<string>('');
  const [reposData, setReposData] = useState<{}[]>([{}]);
  const [numberOfResults, setNumberOfResults] = useState<number>(0);

  const columns = [
    { field: 'col1', headerName: 'Repository name', width: 150 },
    { field: 'col2', headerName: 'Author', width: 150 },
    { field: 'col3', headerName: 'Stars', width: 150 },
  ];

  const rows = [
    { id: 1, col1: 'Hello', col2: 'World' },
    { id: 2, col1: 'DataGridPro', col2: 'is Awesome' },
    { id: 3, col1: 'MUI', col2: 'is Amazing' },
  ];

  const handleSubmit = (e: any) => {
    e.preventDefault();
    return repositorySearch(keyword).then(repos => {
      setNumberOfResults(repos.total_count);
      setReposData(repos.items);
    });
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <label>
          Keyword:
          <input
            value={keyword}
            onChange={e => {
              setKeyword(e.target.value);
            }}
          ></input>
        </label>
        <button type="submit">Search</button>
      </form>
      <DataGrid rows={rows} columns={columns} pageSizeOptions={[25, 50 , 75, 100]} />
    </div>
  );
}

export default App;
