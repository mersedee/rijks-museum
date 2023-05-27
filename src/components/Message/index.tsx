import { type FC } from 'react'

interface Props {
  text: string
}

const Message: FC<Props> = ({ text }) => {
  return (
    <p className="text-center text-gray-500 w-full mt-20">
      {text}
    </p>
  )
}

export default Message
