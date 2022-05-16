import React, { ReactElement, useEffect, useState } from 'react';
import { useFakeQuery } from './data/fakeFetchClient';
import SearchBar from './components/searchBar/SearchBar';
import Card from './components/card/Card';
import { Player } from './data/types';

function App(): ReactElement {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const { data, error, loading } = useFakeQuery('SelectCatPlayers', {
    variables: { search: searchTerm },
  });
  const [playerData, setPlayerData] = useState<Player[]>([]);

  useEffect(() => {
    setPlayerData(data);
  }, [data]);

  return (
    <div className="app-container">
      <h1>Recent Activity</h1>
      <SearchBar setSearchTerm={setSearchTerm} />
      <span>
        {playerData
          ? playerData.map((player, idx): ReactElement => {
              return <Card key={idx} player={player} />;
            })
          : 'Loading...'}
      </span>
    </div>
  );
}

export default App;
