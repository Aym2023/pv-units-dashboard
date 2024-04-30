export default function SearchBar({ setSearchQuery }) {
  return (
    <input
      type="text"
      placeholder="Search by name or location"
      onChange={(e) => setSearchQuery(e.target.value)}
    />
  );
}
