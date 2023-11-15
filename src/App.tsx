import {
    QueryCache,
    QueryClient,
    QueryClientProvider
} from "@tanstack/react-query";
import { Suspense } from "react";
import { Provider } from "react-redux";
import { AttendanceIndex } from "./pages/AttendaceINdex";
import store from "./store";
import { Alert } from "./utils/alert";

const queryClient = new QueryClient({
    queryCache: new QueryCache({
        onError: (error: any) => {
            Alert.error(error?.response?.data?.message as string);

            if (error?.response?.status === 401) {
                setTimeout(() => {
                    window.location.href = "/";
                }, 1000);
            }
        }
    }),

    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false,
            refetchOnMount: false,
            refetchOnReconnect: false,
            cacheTime: 0,
            retry: false,
            staleTime: 5 * 60 * 1000
        }
    }
});

function App() {
    return (
        <Suspense>
            <QueryClientProvider client={queryClient}>
                <Provider store={store}>
                    <AttendanceIndex />
                </Provider>
            </QueryClientProvider>
        </Suspense>
    );
}

export default App;
