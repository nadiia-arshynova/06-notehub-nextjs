'use client';

interface ErrorProps {
  error: unknown;
}

export default function NotesError({ error }: ErrorProps) {
  const message = error instanceof Error ? error.message : String(error);

  return <p>Could not fetch the list of notes. {message}</p>;
}
