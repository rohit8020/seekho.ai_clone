import React from 'react';
import Routes from '@/routes/Routes';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'

const queryClient = new QueryClient()

export default function App() {
  return(

    <>
       <QueryClientProvider client={queryClient}>
<Routes />;
</QueryClientProvider>
</>
    )
}
