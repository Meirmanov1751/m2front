import useSWR from 'swr'

export default function useNews( page?: any, limit?: any) {
  const {data} = useSWR(`/api/news?page=${page}&limit=${limit}`)

  return data
}


