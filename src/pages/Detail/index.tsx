import { type FC } from 'react'
import { Link, useParams } from 'react-router-dom'
import { ArrowLeft } from 'react-feather'
import { useGetArtQuery } from '@/redux/art.ts'
import { formatStringArray } from '@/helper/formatStringArray.ts'
import Message from '@/components/Message'
import defaultImage from '@/assets/default.jpg'
import Loading from '@/components/Loading'

const Detail: FC = () => {
  const { id = '' } = useParams()
  const { data, isLoading } = useGetArtQuery(id)
  const { artObject } = data || {}

  return (
    <div className="px-4 md:px-[100px] lg:px-[200px] pt-10 w-auto 2xl:w-[1300px] mx-auto">

      <Link to="/" className="font-medium flex items-center text-lg">
        <ArrowLeft className="mr-1" />
        Back to Home
      </Link>

      {isLoading
        ? <Loading />
        : (
          <div>
            {artObject
              ? (
                <div className="mt-10">
                  <img
                    src={artObject.hasImage ? artObject?.webImage?.url : defaultImage}
                    className="w-full h-auto"
                    alt={artObject?.title}
                  />

                  <div className="flex justify-between text-gray-400 mt-1">
                    <div>Date: {artObject.dating.presentingDate}</div>
                    <div>{artObject.location}</div>
                  </div>

                  <h1 className="mt-5 text-2xl md:text-3xl font-bold">
                    {artObject.longTitle}
                  </h1>
                  <p className="mt-5 text-lg md:text-xl text-gray-700">
                    {artObject.description}
                  </p>

                  <ul className="mt-5 flex flex-col gap-3">
                    <li className="text-lg md:text-xl">
                      <span className="text-gray-600 mr-1">Materials:</span>
                      {formatStringArray(artObject.materials)}
                    </li>
                    <li className="text-lg md:text-xl">
                      <span className="text-gray-600 mr-1">Principal Or FirstMaker:</span>
                      {artObject.principalOrFirstMaker}
                    </li>
                    <li className="text-lg md:text-xl">
                      <span className="text-gray-600 mr-1">Techniques:</span>
                      {formatStringArray(artObject.techniques)}
                    </li>
                  </ul>
                </div>)
              : <Message text="Something went wrong!" />}
          </div>)
      }
    </div>
  )
}

export default Detail
