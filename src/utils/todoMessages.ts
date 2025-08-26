export const getEmptyListMessage = (filter: string): string => {
  switch (filter) {
  case 'all':
    return 'Нет задач';
  case 'active':
    return 'Нет активных задач';
  case 'completed':
    return 'Нет завершённых задач';
  default:
    return 'Нет задач';
  }
};