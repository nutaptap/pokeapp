import { ChangeEvent, FormEvent, useState } from "react";

interface SearchBarProps {
  onSearchSubmit: (name: string) => void;
}

export function SearchBar({ onSearchSubmit }: SearchBarProps) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleFormSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSearchSubmit(searchTerm);
  };

  return (
    <form onSubmit={handleFormSubmit} className="search-bar">
      <input
        required
        type="text"
        placeholder="Search..."
        onChange={handleInputChange}
      />
      <button type="submit" aria-labelledby="button-label">
        <span id="button-label" hidden>
          Search
        </span>
        <svg
          aria-hidden="true"
          focusable="false"
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#5C82F2"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <title>Search</title>
          <circle cx="11" cy="11" r="8"></circle>
          <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
        </svg>
      </button>
    </form>
  );
}
