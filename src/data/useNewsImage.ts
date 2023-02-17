import useSWR from "swr";

export default function useNewsImage() {
  const {data} = useSWR('/api/newsimage/')

  return data
}
