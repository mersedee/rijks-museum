import { type FC } from 'react'
import { useLazySearchContentQuery } from '@/redux/art.ts'
import ArtistList from '@/components/ArtList'
import Loading from '@/components/Loading'
import Message from '@/components/Message'
import Header from '@/components/Header'

const Home: FC = () => {
  const [onSearch, { data, isLoading }] = useLazySearchContentQuery()
  const { artObjects } = data ?? {}

  return (
    <>
      <Header onSearch={onSearch} />

      <div className="pt-20 px-5 md:px-20">
        {isLoading ? <Loading /> : artObjects ? <ArtistList arts={artObjects} /> : <Message text="Please search to find the results you're looking for." />}
      </div>
    </>
  )
}

export default Home
