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
  const activeFilter = useSelector((state: RootState) => state.visibilityFilter);

  return (
    <div style={{ marginBottom: '1.5rem' }}>
      {filterButtons.map(({ value, label }) => (
        <button
          key={value}
          type="button"
          onClick={() => dispatch(setVisibilityFilter(value))}
          style={{
            padding: '0.6rem 1rem',
            margin: '0 0.2rem',
            border: '1px solid #ccc',
            background: activeFilter === value ? '#007acc' : '#f0f0f0',
            color: activeFilter === value ? 'white' : 'black',
            cursor: 'pointer',
            borderRadius: '4px',
          }}
        >
          {label}
        </button>
      ))}
    </div>
  );
}

export default FilterButtons;