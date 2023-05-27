import { type FC, type ChangeEvent, useState } from 'react'
import { useLazySearchContentQuery } from '@/redux/art.ts'
import bgImage from '@/assets/header.jpeg'
import ArtistList from '@/components/ArtList'
import Loading from '@/components/Loading'
import Message from '@/components/Message'

const Home: FC = () => {
  const [onSearch, { data, isLoading }] = useLazySearchContentQuery()
  const [searchText, setSearchText] = useState<string>('')
  const { artObjects } = data || {}

  const handleSearch = (): void => {
    onSearch(searchText)
    setSearchText('')
  }

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setSearchText(event.target.value)
  }

  return (
    <>
      <div
        className="h-80 flex justify-center items-center bg-no-repeat bg-cover bg-top px-5"
        style={{ backgroundImage: `url(${bgImage})` }}>
        <div className="relative flex items-center w-full sm:w-[550px] h-14 rounded-lg focus-within:shadow-sm bg-white overflow-hidden border border-gray-200">
          <input
            type="text"
            className="peer h-full w-full outline-none text-base text-gray-700 px-3"
            placeholder="Search for info, artist, tour or more ..."
            value={searchText}
            onChange={handleChange}
          />
          <button
            className="text-sm md:text-base text-white bg-green-950 rounded-lg text-center leading-0 absolute top-[9px] md:top-[7px] right-2 px-[14px] py-2 flex justify-center items-center focus:outline-none"
            onClick={handleSearch}
          >
            Search
          </button>
        </div>
      </div>

      <div className="pt-20 px-5 md:px-20">
        {isLoading ? <Loading /> : artObjects ? <ArtistList arts={artObjects} /> : <Message text="Please search to find the results you're looking for." />}
      </div>
    </>
  )
}

export default Home
