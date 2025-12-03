"use client";

export default function Loading() {
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-main-maroon mx-auto mb-4"></div>
        <p className="text-gray-600">Dashboard Loading...</p>
      </div>
    </div>
  );
}