import { useDispatch, useSelector } from 'react-redux';
import { setVisibilityFilter } from '../features/todos/filterSlice';
import { RootState } from '../app/store';

const filterButtons = [
  { value: 'all', label: 'Все' },
  { value: 'active', label: 'Активные' },
  { value: 'completed', label: 'Завершённые' },
] as const;

function FilterButtons() {
  const dispatch = useDispatch();
  const activeFilter = useSelector(
    (state: RootState) => state.visibilityFilter,
  );

  return (
    <div className="mb-6">
      {filterButtons.map(({ value, label }) => {
        const isActive = activeFilter === value;
        const baseClasses = 'px-4 py-2 mx-1 border border-gray-300 rounded-md cursor-pointer text-sm font-medium transition-colors duration-200';
        const activeClasses = 'bg-sky-600 text-white hover:bg-sky-700';
        const inactiveClasses = 'bg-gray-100 text-gray-800 hover:bg-gray-200';

        return (
          <button
            key={value}
            type="button"
            onClick={() => dispatch(setVisibilityFilter(value))}
            className={`${baseClasses} ${isActive ? activeClasses : inactiveClasses}`}
          >
            {label}
          </button>
        );
      })}
    </div>
  );
}

export default FilterButtons;