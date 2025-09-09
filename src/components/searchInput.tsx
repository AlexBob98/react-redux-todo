import { ChangeEvent } from 'react';
import { SearchInputProps } from '../interfaces/searchInput';

function SearchInput({ value, onChange }: SearchInputProps) {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  const inputClasses = `
    w-full max-w-lg sm:max-w-xl md:max-w-2xl
    px-4 py-3
    border border-gray-300
    rounded-md shadow-sm
    focus:outline-none
    focus:shadow-md text-sm
  `.trim();

  return (
    <div className="mb-4">
      <input
        type="text"
        placeholder="Поиск задач..."
        value={value}
        onChange={handleChange}
        className={inputClasses}
      />
    </div>
  );
}

export default SearchInput;