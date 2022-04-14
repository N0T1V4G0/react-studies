import { useEffect, useState } from 'react';
import RepositoryItem from './RepositoryItem';

export function RepositoryList() {
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    fetch('https://api.github.com/users/n0t1v4g0/repos')
      .then((res) => res.json())
      .then((data) => setRepositories(data));
  }, []);

  return (
    <section>
      <h1>Repository List</h1>

      <ul>
        {repositories.map((repository, i) => (
          <RepositoryItem key={i} repository={repository} />
        ))}
      </ul>
    </section>
  );
}
