import { ChangeEvent } from 'react';
import { SearchInputProps } from '../interfaces/searchInput';

function SearchInput({ value, onChange }: SearchInputProps) {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  return (
    <div className="mb-4">
      <input
        type="text"
        placeholder="Поиск задач..."
        value={value}
        onChange={handleChange}
        className="w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
      />
    </div>
  );
}

export default SearchInput;