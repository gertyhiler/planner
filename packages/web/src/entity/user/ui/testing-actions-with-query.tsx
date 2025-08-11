"use client";

import { useQuery } from "@tanstack/react-query";

import { Loader2Icon } from "lucide-react";

import { getUsers } from "../model/api";

function TestingActionsWithQuery() {
  const { isLoading, data } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const users = await getUsers();
      return users;
    },
  });

  return (
    <div className="flex flex-col gap-4">
      <h1>TestingActionsWithQuery</h1>
      {isLoading && (
        <span className="flex justify-center">
          <Loader2Icon className="animate-spin size-5" />
        </span>
      )}
      {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
    </div>
  );
}

export default TestingActionsWithQuery;
