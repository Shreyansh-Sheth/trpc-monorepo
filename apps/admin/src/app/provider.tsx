import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { httpBatchLink } from "@trpc/client";
import React, { useState } from "react";
import { trpc } from "../utils/api";
import { createTRPCProxyClient, createWSClient, wsLink } from "@trpc/client";
const wsClient = createWSClient({
  url: `ws://localhost:3000/trpc`,
});
export function Provider({ children }: { children: React.ReactNode }) {
  const [queryClient] = useState(() => new QueryClient());
  const [trpcClient] = useState(() =>
    trpc.createClient({
      links: [
        wsLink({
          client: wsClient,
        }),
        httpBatchLink({
          url: "http://localhost:3000/trpc",

          // You can pass any HTTP headers you wish here
          async headers() {
            return {
              //   authorization: getAuthCookie(),
            };
          },
        }),
      ],
    })
  );

  return (
    <trpc.Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </trpc.Provider>
  );
}
