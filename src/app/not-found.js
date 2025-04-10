"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const NotFound = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // Runs only on the client side
  }, []);
  return (
    <main className="grid min-h-full px-6 py-10 bg-white place-items-center md:py-32 lg:px-8">
      {/* {isClient && (
        <p>{("someKey") || "No data available"}</p>
      )} */}
      <div className="space-y-4 text-center md:space-y-8">
        <div className="space-y-5 md:space-y-10">
          <p className="sm:text-[5rem] text-2xl font-semibold text-primary">
            404
          </p>
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Page not found
          </h1>
        </div>
        <p className="text-base text-gray-600">
          Sorry, we couldn’t find the page you’re looking for.
        </p>
        <div className="flex items-center justify-center gap-x-6">
          <Button variant="primary" asChild className="w-auto">
            <Link href="/">
              Go back home <span aria-hidden="true">&rarr;</span>
            </Link>
          </Button>
        </div>
      </div>
    </main>
  );
};

export default React.memo(NotFound);
