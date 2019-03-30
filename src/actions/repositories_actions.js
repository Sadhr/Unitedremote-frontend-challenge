import axios from "axios";
import days_between from "../components/utils/days_between";

import { GET_REPOSITORIES } from "./types";

export const getRepositoryDetails = page => {
  const API_URI = `https://api.github.com/search/repositories?q=created:%3E2019-03-01&sort=stars&order=desc&page=${page}`;
  const request = axios.get(API_URI).then(res => {
    const data = res.data.items;
    let result = [];
    if (res) {
      for (let i = 0; i < data.length; i++) {
        result.push({
          owner: data[i].owner.login,
          image: data[i].owner.avatar_url,
          repositoryName: data[i].name,
          description: data[i].description,
          createdAt: days_between(data[i].created_at),
          stars: data[i].stargazers_count,
          issues: data[i].open_issues
        });
      }

      return result;
    }
  });

  return {
    type: GET_REPOSITORIES,
    payload: request
  };
};
