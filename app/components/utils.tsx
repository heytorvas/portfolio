import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function convertDate(date: string): string {
  if (date == null) {
    return 'Present';
  }
  let dateObject = new Date(`${date}-01`);
  let month = dateObject.toLocaleString('default', { month: 'long' });
  return `${month} ${dateObject.getFullYear()}`;
}

export const url: string = 'http://localhost:5000/v1/users/24231cbe-35cf-415f-843e-7032ae052ae4';

export async function fetchData(path: string, setData) {
  try {
    const response = await fetch(`${url}/${path}?language=en`);
    if (!response.ok) {
      throw new Error('Network response was not ok.');
    }
    const data = await response.json();
    setData(data);
  } catch (error) {
    throw new Error('Network response was not ok.');
  }
}