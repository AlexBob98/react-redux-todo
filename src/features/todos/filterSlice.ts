import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { VisibilityFilter } from '../../types/filterSlice';

const loadFilter = (): VisibilityFilter => {
  try {
    const saved = localStorage.getItem('visibilityFilter');
    if (saved === null) return 'all';

    const parsed = JSON.parse(saved);
    if (parsed === 'all' || parsed === 'active' || parsed === 'completed') {
      return parsed;
    }
    return 'all';
  } catch (e) {
    console.warn('Failed to load filter from localStorage', e);
    return 'all';
  }
};

const saveFilter = (filter: VisibilityFilter): void => {
  try {
    localStorage.setItem('visibilityFilter', JSON.stringify(filter));
  } catch (e) {
    console.warn('Failed to save filter to localStorage', e);
  }
};

const initialState: VisibilityFilter = loadFilter();

const filterSlice = createSlice({
  name: 'visibilityFilter',
  initialState,
  reducers: {
    setVisibilityFilter: (state, action: PayloadAction<VisibilityFilter>) => {
      const newFilter = action.payload;
      saveFilter(newFilter);
      return newFilter;
    }},
});

export const { setVisibilityFilter } = filterSlice.actions;
export default filterSlice.reducer;
