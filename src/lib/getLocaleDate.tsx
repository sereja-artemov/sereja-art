
export default function getLocaleDate(locales: string, date: string) {
  const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timezone: 'UTC'
  };

  return new Date(date).toLocaleString(locales, options);
}
