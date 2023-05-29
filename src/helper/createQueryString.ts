import { type QueryParam } from '@/types'
export const createQueryString = (args: QueryParam[]): string => {
  const queryParams: string[] = []

  const addQueryParam = (param: QueryParam): void => {
    if (param.value) {
      queryParams.push(`${param.name}=${param.value}`)
    }
  }

  args.forEach((param) => { addQueryParam(param) })

  return `&${queryParams.join('&')}`
}
