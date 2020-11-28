import React from "react";

const ReposItems = ({ repo }) => {
  return (
    <div className="card">
      <h3>
        <a href={repo.html_url}>{repo.html_url}</a>
      </h3>
    </div>
  );
};

export default ReposItems;
