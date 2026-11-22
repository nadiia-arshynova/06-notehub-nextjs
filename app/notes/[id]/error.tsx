'use client';

interface ErrorProps {
  error: unknown;
}

export default function NoteDetailsError({ error }: ErrorProps) {
  const message = error instanceof Error ? error.message : String(error);

  return <p>Could not fetch note details. {message}</p>;
}
