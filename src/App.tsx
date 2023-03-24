import { useState } from 'react';
import { repositorySearch } from './api';
import { DataGrid } from '@mui/x-data-grid';

function App() {
  const [keyword, setKeyword] = useState<string>('');
  const [reposData, setReposData] = useState<{}[]>([{}]);
  const [numberOfResults, setNumberOfResults] = useState<number>(0);

  const columns = [
    { field: 'repoName', headerName: 'Repository name', width: 150 },
    { field: 'authorName', headerName: 'Author', width: 150 },
    { field: 'stars', headerName: 'Stars', width: 150 },
  ];

  const rows = [
    { id: 1, repoName: 'Hello', authorName: 'World', stars: 0 },
    { id: 2, repoName: 'DataGridPro', authorName: 'is Awesome', stars: 0 },
    { id: 3, repoName: 'MUI', authorName: 'is Amazing', stars: 0 },
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
      <DataGrid
        rows={rows}
        columns={columns}
        autoHeight={true}
        pageSizeOptions={[25, 50, 75, 100]}
      />
    </div>
  );
}

export default App;
