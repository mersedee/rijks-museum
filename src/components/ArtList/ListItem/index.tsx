import { type FC } from 'react'
import { Link } from 'react-router-dom'
import defaultImage from '@/assets/default.jpg'

interface Props {
  title: string
  longTitle: string
  imgSrc: string
  link: string
  hasImage: boolean
}

const ListItem: FC<Props> = ({ title, longTitle, imgSrc, hasImage, link }) => {
  return (
    <div className="break-inside-avoid mb-8 bg-white rounded-lg shadow-lg">
      <img
        src={hasImage ? imgSrc : defaultImage}
        className="rounded-t-lg w-full h-auto object-cover object-top"
        alt={title}
      />
      <div className="p-6">
        <h2 className="font-bold mb-2 text-xl">{title}</h2>
        <p className="text-base text-gray-700 mb-1">
          {longTitle}
        </p>
        <Link
          to={link}
          className="text-sm text-gary-500 hover:text-purple-500 underline"
        >
          Read More
        </Link>
      </div>
    </div>
  )
}

export default ListItem
