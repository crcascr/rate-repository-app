import { useState, useEffect } from "react";

function useRepositories() {
  const [repositories, setRepositories] = useState(null);
  async function fetchRepositories() {
    const response = await globalThis.fetch(
      "http://192.168.1.4:5000/api/repositories"
    );
    const json = await response.json();
    setRepositories(json);
  }

  useEffect(() => {
    fetchRepositories();
  }, []);

  const repositoriesNodes = repositories
    ? repositories.edges.map((edge) => edge.node)
    : [];

  return { repositories: repositoriesNodes };
}

export default useRepositories;
