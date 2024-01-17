import React, { useEffect, useState } from "react";
import { FlatList, Text } from "react-native";
import RepositoryItem from "./RepositoryItem";

function RepositoryList() {
  const [repositories, setRepositories] = useState(null);

  async function fetchRepositories() {
    const response = await globalThis.fetch(
      "http://localhost:5000/api/repositories"
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

  return (
    <FlatList
      data={repositoriesNodes}
      ItemSeparatorComponent={() => <Text></Text>}
      renderItem={({ item: repo }) => <RepositoryItem {...repo} />}
    ></FlatList>
  );
}

export default RepositoryList;
