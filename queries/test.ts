import { useQuery } from '@tanstack/react-query'

async function getTests() {
  return [{ name: 'Hello 123' }, { name: 'Hello 456' }, { name: 'Hello 789' }]
}

const useTestQuery = () => useQuery({ queryKey: ['test'], queryFn: getTests })

export default useTestQuery
