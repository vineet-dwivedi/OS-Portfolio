import React, { useState, useEffect } from "react";
import MacWindows from "./MacWindows";
import "./github.scss";

const GitCard = ({ repo }) => {
  return (
    <div className="card">
      <h1>{repo.name}</h1>
      <p className="description">{repo.description || "No description available"}</p>

      <div className="tags">
        {repo.topics?.map((tag) => (
          <p key={tag} className="tag">{tag}</p>
        ))}
      </div>

      <div className="urls">
        <a href={repo.html_url} target="_blank" rel="noreferrer">
          Repository Link
        </a>
        {repo.homepage && (
          <a href={repo.homepage} target="_blank" rel="noreferrer">
            Demo Link
          </a>
        )}
      </div>
    </div>
  );
};

const Github = () => {
  const [repos, setRepos] = useState([]);
  const username = "vineet-dwivedi"; 

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const res = await fetch(
          `https://api.github.com/users/${username}/repos?per_page=100&sort=updated`
        );
        const data = await res.json();

        const enriched = await Promise.all(
          data.map(async (repo) => {
            const topicsRes = await fetch(repo.url + "/topics", {
              headers: { Accept: "application/vnd.github.mercy-preview+json" },
            });
            const topicsData = await topicsRes.json();
            return { ...repo, topics: topicsData.names };
          })
        );

        setRepos(enriched);
      } catch (err) {
        console.error("GitHub fetch error:", err);
      }
    };

    fetchRepos();
  }, [username]);

  return (
    <MacWindows>
      <div className="cards">
        {repos.map((repo) => (
          <GitCard key={repo.id} repo={repo} />
        ))}
      </div>
    </MacWindows>
  );
};

export default Github;
