import axios from 'axios';

const githubSearchAPI = axios.create({ baseURL: 'https://api.github.com' });

export const repositorySearch = (keyword: string) => {
  return githubSearchAPI
    .get('/search/repositories', {
      params: { q: keyword, sort: 'stars', per_page: 100 },
    })
    .then(repos => repos.data);
};
