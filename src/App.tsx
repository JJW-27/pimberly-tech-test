import { useState } from 'react';

function App() {
  const [keyword, setKeyword] = useState<string>('');

  return (
    <div className="App">
      <form>
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
