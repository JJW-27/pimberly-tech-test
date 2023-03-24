import { useState } from 'react';
import { repositorySearch } from './api';

function App() {
  const [keyword, setKeyword] = useState<string>('');
  const [reposData, setReposData] = useState<{}[]>([{}]);
  const [numberOfResults, setNumberOfResults] = useState<number>(0);

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
      </form>
    </div>
  );
}

export default App;
