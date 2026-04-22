"use client";

import * as React from "react";
import { AppLocationTreeFilter, type TreeNode } from "@viana/ui";

const SAMPLE_TREE: TreeNode[] = [
  {
    label: "All",
    count: 65,
    children: [
      {
        label: "Philippines",
        count: 65,
        children: [
          {
            label: "Davao City Davao",
            count: 1,
            children: [{ label: "Davao City", count: 1 }],
          },
          {
            label: "Misamis Oriental",
            count: 64,
            children: [{ label: "Cagayan de Oro", count: 64 }],
          },
        ],
      },
    ],
  },
];

export function LocationTreeFilterDefaultPreview() {
  const [selected, setSelected] = React.useState<string | null>(null);

  return (
    <div className="flex items-start gap-8 p-4">
      <AppLocationTreeFilter
        data={SAMPLE_TREE}
        title="Filter by Location"
        showHelp
        searchPlaceholder="Search for a country, state, or city..."
        unallocated={{ label: "Unallocated Devices", count: 135 }}
        selected={selected}
        onSelect={setSelected}
      />
      <div className="mt-1 text-sm text-muted-foreground">
        <p className="font-medium text-foreground">Selected:</p>
        <code className="font-mono">
          {selected === null ? "null (All)" : JSON.stringify(selected)}
        </code>
      </div>
    </div>
  );
}

export function LocationTreeFilterNoUnallocatedPreview() {
  const [selected, setSelected] = React.useState<string | null>(null);

  const tree: TreeNode[] = [
    {
      label: "All",
      count: 120,
      children: [
        {
          label: "United States",
          count: 80,
          children: [
            { label: "New York", count: 40 },
            { label: "San Francisco", count: 40 },
          ],
        },
        {
          label: "Europe",
          count: 40,
          children: [
            { label: "London", count: 25 },
            { label: "Berlin", count: 15 },
          ],
        },
      ],
    },
  ];

  return (
    <div className="flex items-start gap-8 p-4">
      <AppLocationTreeFilter
        data={tree}
        title="Filter by Region"
        searchPlaceholder="Search regions..."
        selected={selected}
        onSelect={setSelected}
      />
      <div className="mt-1 text-sm text-muted-foreground">
        <p className="font-medium text-foreground">Selected:</p>
        <code className="font-mono">
          {selected === null ? "null (All)" : JSON.stringify(selected)}
        </code>
      </div>
    </div>
  );
}
