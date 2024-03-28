// import React from 'react'
import React, { useState, useEffect } from "react";
import { getRepos } from "../services/api";
import moment from 'moment';

function Repos({ reposUrl }) {
  const [reposData, setReposData] = useState([]);
  const [visibleRepos, setVisibleRepos] = useState(9); // Number of repositories initially visible

  const handleShowMore = () => {
    setVisibleRepos(prevVisibleRepos => prevVisibleRepos + 9); // Increase visible repositories by 9 on click
  };

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const repos = await getRepos(reposUrl); // Fetch repositories using an API function
        setReposData(repos);
        
      } catch (error) {
        console.error("Error fetching repositories:", error);
      }
    };

    fetchRepos();
  }, [reposUrl]); // Fetch repositories when reposUrl changes

  return (
    <div className="bg-main_bg shadow-md">
      <div className="mx-auto p-8 container">
        <div className="gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {reposData.slice(0, visibleRepos)
            .map((repo, index) => (
              <div
                key={index}
                className="relative flex flex-col justify-between items-start bg-transperent shadow-md p-6 border rounded-md"
              >
                <div className="flex justify-start items-center gap-2 mb-4">
                  <span className="text-white">
                    <svg
                      aria-hidden="true"
                      height="16"
                      viewBox="0 0 16 16"
                      version="1.1"
                      width="16"
                      data-view-component="true"
                      className="mr-1 color-octicon octicon-repo"
                      fill="white" // Set the fill attribute to white
                    >
                      <path d="M2 2.5A2.5 2.5 0 0 1 4.5 0h8.75a.75.75 0 0 1 .75.75v12.5a.75.75 0 0 1-.75.75h-2.5a.75.75 0 0 1 0-1.5h1.75v-2h-8a1 1 0 0 0-.714 1.7.75.75 0 1 1-1.072 1.05A2.495 2.495 0 0 1 2 11.5Zm10.5-1h-8a1 1 0 0 0-1 1v6.708A2.486 2.486 0 0 1 4.5 9h8ZM5 12.25a.25.25 0 0 1 .25-.25h3.5a.25.25 0 0 1 .25.25v3.25a.25.25 0 0 1-.4.2l-1.45-1.087a.249.249 0 0 0-.3 0L5.4 15.7a.25.25 0 0 1-.4-.2Z"></path>
                    </svg>
                  </span>

                  <span className="font-semibold text-blue-500 text-capital">
                    {repo.name}
                  </span>
                  {!repo.private && (
                    <span className="top-2 right-2 absolute mt-2 mr-2 p-1 border rounded text-white">
                      Public
                    </span>
                  )}
                </div>
                <p className="mb-4 text-white">{repo.description}</p>
                <p className="mb-4 text-white">
                  <span>{repo.language}</span>
                </p>
                <p className="flex justify-start items-center"> 
                <a className="flex items-center gap-1 mr-3 text-white Link--muted" href={`${repo.stargazers_url}`}>
                  <svg
                    aria-label="star"
                    role="img"
                    height="16"
                    viewBox="0 0 16 16"
                    version="1.1"
                    width="16"
                    className="mr-1 color-octicon octicon-repo"
                    fill="white" // Set the fill attribute to white
                  >
                    <path d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.751.751 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Zm0 2.445L6.615 5.5a.75.75 0 0 1-.564.41l-3.097.45 2.24 2.184a.75.75 0 0 1 .216.664l-.528 3.084 2.769-1.456a.75.75 0 0 1 .698 0l2.77 1.456-.53-3.084a.75.75 0 0 1 .216-.664l2.24-2.183-3.096-.45a.75.75 0 0 1-.564-.41L8 2.694Z"></path>
                  </svg>
                  {repo.stargazers_count}
                </a>
                <a className="flex items-center gap-1 mr-3 text-white Link--muted" href={`${repo.forks_url}`}>
                  <svg
                    aria-label="fork"
                    role="img"
                    height="16"
                    viewBox="0 0 16 16"
                    version="1.1"
                    width="16"
                    className="mr-1 color-octicon octicon-repo"
                      fill="white" // Set the fill attribute to white
                  >
                    <path d="M5 5.372v.878c0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75v-.878a2.25 2.25 0 1 1 1.5 0v.878a2.25 2.25 0 0 1-2.25 2.25h-1.5v2.128a2.251 2.251 0 1 1-1.5 0V8.5h-1.5A2.25 2.25 0 0 1 3.5 6.25v-.878a2.25 2.25 0 1 1 1.5 0ZM5 3.25a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Zm6.75.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm-3 8.75a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Z"></path>
                  </svg>
                  {repo.forks}
                </a>
                <a className="mr-3 text-white Link--muted" href={`${repo.issues_url}`}>
                  Issues {repo.open_issues}
                </a>
                
               <span className="text-white no-wrap">Updated {moment(repo.updated_at).fromNow()}</span>

                </p>
                {repo.topics && repo.topics.length > 0 && (
                  <div>
                    <ul>
                      {repo.topics.slice(0, 2).map((topic, i) => (
                        <li
                          key={i}
                          className="inline-block bg-blue-500 mt-2 mr-2 p-2 rounded-md text-md text-white"
                        >
                          {topic}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
        </div>
      </div>
      <div className="flex justify-center items-start py-4">

      {reposData.length > visibleRepos && (
          <button onClick={handleShowMore} className="bg-header_bg hover:bg-gray-700 px-4 py-2 border rounded-md text-white">
          Show More
        </button>
      )}
      </div>
    </div>
  );
}

export default Repos;
