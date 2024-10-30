// components/GitHubRepos.tsx
import { useEffect, useState } from 'react';

interface RepoLanguages {
    name: string;
    languages: { [language: string]: number }; // Each language with its byte count
}

interface GitHubReposProps {
    accessToken: string;
}

const GitHubRepos: React.FC<GitHubReposProps> = ({ accessToken }) => {
    const [repos, setRepos] = useState<RepoLanguages[]>([]);

    useEffect(() => {
        const fetchRepos = async () => {
            try {
                const response = await fetch('/api/github', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ accessToken }),
                });

                if (!response.ok) {
                    throw new Error('Failed to fetch repositories');
                }

                const data: RepoLanguages[] = await response.json();
                setRepos(data);
            } catch (error) {
                console.error(error);
            }
        };

        if (accessToken) {
            fetchRepos();
        }
    }, [accessToken]);

    return (
        <div>
            <h2>GitHub Repositories</h2>
            <ul>
                {repos.map((repo) => (
                    <li key={repo.name}>
                        <h3>{repo.name}</h3>
                        <pre>{JSON.stringify(repo.languages, null, 2)}</pre>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default GitHubRepos;
