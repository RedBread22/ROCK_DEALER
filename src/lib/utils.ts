import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Encode an image path for use in URLs.
 * Encodes special characters (spaces, umlauts, commas, etc.) while keeping
 * forward slashes intact so the path structure is preserved.
 */
export function encodeImagePath(path: string): string {
  return path
    .split('/')
    .map((segment) => encodeURIComponent(segment))
    .join('/');
}
