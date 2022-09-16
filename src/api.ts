import { GraphQLClient } from "graphql-request";
import { QueryClient } from "react-query";

import { getSdk } from "./generated/graphql";

const gclclient = new GraphQLClient("http://localhost:3000/api/graphql")
export const { getFilmes, filmePorNome } = getSdk(gclclient)

export const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnMount: false,
            refetchOnWindowFocus: false,
            refetchOnReconnect: false
        }
    }
})