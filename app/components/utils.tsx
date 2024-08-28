import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function convertDate(date: string): string {
  if (date == null) {
    return 'Present';
  }
  let dateObject = new Date(`${date}-15`);
  let month = dateObject.toLocaleString('default', { month: 'long' });
  return `${month} ${dateObject.getFullYear()}`;
}

export const url: string = 'http://localhost:5000/v1/users/4a4fe1b6-1e03-4162-99af-be6a14b0fa04';
export const curriculum: string = "https://docs.google.com/document/d/1t00DRB2W4SMrxiAJeZmHcxrAqfv43ArJiTRjLwAsLIM/preview";

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