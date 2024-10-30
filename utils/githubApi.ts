// utils/githubApi.ts

import axios from 'axios';

export const fetchGitHubRepos = async (accessToken: string) => {
    try {
        // Fetch repositories for the authenticated user
        const reposResponse = await axios.get('https://api.github.com/user/repos', {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        });

        const repos = reposResponse.data;

        // Fetch languages used in each repository
        const reposWithLanguages = await Promise.all(
            repos.map(async (repo: any) => {
                const languagesResponse = await axios.get(repo.languages_url, {
                    headers: {
                        Authorization: `Bearer ${accessToken}`,
                    },
                });
                return {
                    ...repo,
                    languages: Object.keys(languagesResponse.data), // Get the language names
                };
            })
        );

        return reposWithLanguages;
    } catch (error) {
        console.error('Error fetching GitHub repos:', error);
        return [];
    }
};
