import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import type { ArtObjectDetailRes, ArtObjectRes, QueryParam, SearchProps } from '@/types'
import { createQueryString } from '@/helper/createQueryString.ts'

const token = import.meta.env.VITE_API_KEY
export const artApi = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://www.rijksmuseum.nl/api/en'
  }),
  endpoints: (builder) => ({
    searchContent: builder.query<ArtObjectRes, SearchProps>({
      query: ({ param, color }) => {
        const args: QueryParam[] = [
          { name: 'q', value: param },
          { name: 'f.normalized32Colors.hex', value: color }
        ]
        const queryString = createQueryString(args)
        return `collection?key=${token}${queryString}`
      }
    }),
    getArt: builder.query<ArtObjectDetailRes, string>({
      query: (id) => `collection/${id}?key=${token}`
    })
  })
})

export const { useLazySearchContentQuery, useGetArtQuery } = artApi
