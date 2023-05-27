import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import type { ArtObjectDetailRes, ArtObjectRes } from '@/types'

const token = import.meta.env.VITE_API_KEY
export const artApi = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://www.rijksmuseum.nl/api/en'
  }),
  endpoints: (builder) => ({
    searchContent: builder.query<ArtObjectRes, string>({
      query: (param) => `collection?key=${token}&q=${param}`
    }),
    getArt: builder.query<ArtObjectDetailRes, string>({
      query: (id) => `collection/${id}?key=${token}`
    })
  })
})

export const { useLazySearchContentQuery, useGetArtQuery } = artApi
