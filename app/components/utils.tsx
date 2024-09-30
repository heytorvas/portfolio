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

export const curriculum: string = "https://docs.google.com/document/d/1t00DRB2W4SMrxiAJeZmHcxrAqfv43ArJiTRjLwAsLIM/preview";
