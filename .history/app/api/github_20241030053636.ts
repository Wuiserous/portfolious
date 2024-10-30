// pages/api/github.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

interface Repo {
    name: string;
    full_name: string;
}

interface LanguageResponse {
    [language: string]: number; // Each language with its byte count
}

interface RepoLanguages {
    name: string;
    languages: LanguageResponse;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { accessToken } = req.body; // Get the access token from the request body

    if (!accessToken) {
        return res.status(400).json({ error: 'Access token is required' });
    }

    try {
        // Step 1: Get the user's repositories
        const reposResponse = await axios.get<Repo[]>('https://api.github.com/user/repos', {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        });

        const repos = reposResponse.data;

        // Step 2: Get languages for each repository
        const languagePromises = repos.map(async (repo) => {
            const languagesResponse = await axios.get<LanguageResponse>(`https://api.github.com/repos/${repo.full_name}/languages`, {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
            });

            return {
                name: repo.name,
                languages: languagesResponse.data,
            };
        });

        const languages = await Promise.all(languagePromises);

        // Send back the repositories and their languages
        res.status(200).json(languages);
    } catch (error) {
        console.error('Error fetching data from GitHub:', error);
        res.status(500).json({ error: 'Failed to fetch data from GitHub' });
    }
}
