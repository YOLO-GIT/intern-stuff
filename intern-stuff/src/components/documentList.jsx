import React from "react";

// Sample document data
const documents = [
  { id: 1, title: "Internship Report", link: "#report" },
  { id: 2, title: "Project Presentation", link: "#presentation" },
  { id: 3, title: "Evaluation Form", link: "#evaluation" },
];

const DocumentList = () => {
  return (
    <div className="p-5">
      <h2>Documents</h2>
      <ul className="list-none p-0">
        {documents.map((doc) => (
          <li className="" key={doc.id}>
            <a
              href={doc.link}
              target="_blank"
              rel="noopener noreferrer"
              className="no-underline text-blue-500 hover:underline"
            >
              {doc.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DocumentList;
