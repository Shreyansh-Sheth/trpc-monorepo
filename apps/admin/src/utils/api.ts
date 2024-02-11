import { createTRPCReact } from "@trpc/react-query";
import type { AppRouter } from "@repo/api";
import { createTRPCProxyClient, createWSClient, wsLink } from "@trpc/client";

export const trpc = createTRPCReact<AppRouter>();
