import { useState } from 'react';
import { repositorySearch } from './api';
import { DataGrid } from '@mui/x-data-grid';

function App() {
  const [keyword, setKeyword] = useState<string>('');
  const [rowsData, setRowsData] = useState<{}[]>([{id:1}]);
  const [numberOfResults, setNumberOfResults] = useState<number>(0);
console.log(rowsData)
  const columns = [
    { field: 'repoName', headerName: 'Repository name', width: 150 },
    { field: 'authorName', headerName: 'Author', width: 150 },
    { field: 'stars', headerName: 'Stars', width: 150 },
  ];

  const handleSubmit = (e: any) => {
    e.preventDefault();
    return repositorySearch(keyword).then(repos => {
      setNumberOfResults(repos.total_count);
      const relevantData = repos.items.map((repo: any) => {
        return {
          id: repo.id,
          repoName: repo.name,
          authorName: repo.owner.login,
          stars: repo.stargazers_count,
        };
      });
      setRowsData(relevantData);
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
        rows={rowsData}
        columns={columns}
        autoHeight={true}
        pageSizeOptions={[25, 50, 75, 100]}
      />
    </div>
  );
}

export default App;
