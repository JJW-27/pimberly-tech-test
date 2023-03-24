import axios from 'axios';

const githubSearchAPI = axios.create({ baseURL: 'https://api.github.com' });

export const repositorySearch = (keyword: string) => {
  return githubSearchAPI
    .get('/search/repositories', { params: { q: keyword } })
    .then(repos => repos.data);
};
