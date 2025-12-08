"use client";

import * as React from "react";

export function SideBySideSection({
  title,
  shadcn,
  oui,
}: {
  title: string;
  shadcn: React.ReactNode;
  oui: React.ReactNode;
}) {
  return (
    <div>
      <h2 className="mb-4 text-lg font-semibold">{title}</h2>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <div>
          <p className="mb-2 block text-sm text-muted-foreground md:hidden">
            Shadcn
          </p>
          <div className="flex justify-center">{shadcn}</div>
        </div>
        <div>
          <p className="mb-2 block text-sm text-muted-foreground md:hidden">
            Oui
          </p>
          <div className="flex justify-center">{oui}</div>
        </div>
      </div>
    </div>
  );
}
