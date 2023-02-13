import useSWR from 'swr';
export default function useUser() {
    const { data, mutate, error } = useSWR('/api/user/me');

    const loading = !data && !error;
    const isLoggedIn = !error && data;
    if(error && error.response &&  error.response.code===403){
        localStorage.removeItem('token')
    }
    return {
        loading,
        isLoggedIn,
        user: data,
        mutate,
    };
}