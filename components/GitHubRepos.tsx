// components/GitHubRepos.tsx

import React, { useEffect, useState } from 'react';
import { fetchGitHubRepos } from '@/utils/githubApi';

interface GitHubRepo {
    id: number;
    name: string;
    html_url: string;
    languages: string[];
}

interface GitHubReposProps {
    accessToken: string;
}

const GitHubRepos: React.FC<GitHubReposProps> = ({ accessToken }) => {
    const [repos, setRepos] = useState<GitHubRepo[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const getRepos = async () => {
            const fetchedRepos = await fetchGitHubRepos(accessToken);
            setRepos(fetchedRepos);
            setLoading(false);
        };

        if (accessToken) {
            getRepos();
        }
    }, [accessToken]);

    if (loading) return <p>Loading repositories...</p>;

    if (repos.length === 0) return <p>No repositories found.</p>;

    return (
        <div>
            <h2>Your GitHub Repositories</h2>
            <ul>
                {repos.map((repo) => (
                    <li key={repo.id}>
                        <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
                            {repo.name}
                        </a>
                        <p>Languages: {repo.languages.join(', ')}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default GitHubRepos;
