"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className=" text-white text-center">
      <h2 className="mb-5 text-4xl">Something went wrong!</h2>
      <button onClick={() => reset()} className="border mb-3 border-red-600 rounded-lg px-4 py-2">Try again</button>
    </div>
  );
}
