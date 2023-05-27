import { type FC } from 'react'
import type { ArtObject } from '@/types'
import Message from '@/components/Message'
import ListItem from './ListItem'

interface Props {
  arts: ArtObject[]
}

const ArtistList: FC<Props> = ({ arts }) => {
  return arts.length === 0
    ? <Message text="No results found." />
    : (
      <div className="relative columns-1 md:columns-2 lg:columns-3 gap-8">
        {arts.map((art) => (
          <ListItem
            key={art.id}
            title={art.title}
            longTitle={art.longTitle}
            imgSrc={art?.webImage?.url}
            link={`/${art.objectNumber}`}
            hasImage={art.hasImage}
          />
        ))}
      </div>)
}

export default ArtistList
