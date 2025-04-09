import type { ClassValue } from 'clsx'
import { cx } from 'class-variance-authority'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(cx(inputs))
}
