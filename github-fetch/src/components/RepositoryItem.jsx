import React from 'react';

export default function RepositoryItem(props) {
  const { name, description, html_url } = props.repository;

  return (
    <li>
      <strong>{name}</strong>
      <p>{description}</p>
      <a href={html_url}>Acessar Repo</a>
    </li>
  );
}
