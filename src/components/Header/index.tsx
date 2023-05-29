import { type ChangeEvent, type FormEvent, type FC, useCallback, useState } from 'react'
import { Image, Search } from 'react-feather'
import Rodal from 'rodal'
import { extractColors } from 'extract-colors'
import { useDropzone } from 'react-dropzone'
import type { Color, SearchProps } from '@/types'
import bgImage from '@/assets/header.jpeg'

interface Props {
  onSearch: ({ param, color }: SearchProps) => any
}

const Header: FC<Props> = ({ onSearch }) => {
  const [searchText, setSearchText] = useState<string>('')
  const [colors, setColors] = useState<Color[]>([])
  const [isModalOpen, setModal] = useState<boolean>(false)
  const onCloseModal = (): void => { setModal(false) }
  const onOpenModal = (): void => { setModal(true) }

  const onDrop = useCallback((acceptedFiles: File[]) => {
    extractColors(URL.createObjectURL(acceptedFiles[0]))
      .then((res: Color[]) => { setColors(res) })
      .catch(console.error)
    onCloseModal()
  }, [])

  const { getRootProps, getInputProps, open } = useDropzone({
    onDrop,
    noClick: true,
    noKeyboard: true,
    maxFiles: 1
  })

  const onChangeInput = (event: ChangeEvent<HTMLInputElement>): void => {
    setSearchText(event.target.value)
  }

  const handleSearch = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault()
    const color = colors.length > 0 ? encodeURIComponent(colors[0].hex) : ''
    onSearch({ param: searchText, color })
    setSearchText('')
    setColors([])
  }

  return (
    <div
      className="h-80 flex justify-center items-center bg-no-repeat bg-cover bg-top px-3 md:px-5"
      style={{ backgroundImage: `url(${bgImage})` }}>
      <div className="relative">
        <form onSubmit={handleSearch} className="relative flex items-center min-w-[355px] w-full sm:w-[550px] h-14 rounded-lg focus-within:shadow-sm bg-white overflow-hidden border border-gray-200">
          <input
            type="text"
            className="peer h-full w-full outline-none text-base text-gray-700 px-3"
            placeholder="Search for info, artist, tour or more ..."
            required
            value={searchText}
            onChange={onChangeInput}
          />
          <div className="absolute top-[15px] right-3 flex gap-2">
            <button
              type="button"
              className="text-sm md:text-base text-white text-center"
              onClick={onOpenModal}
            >
              <Image color="black" />
            </button>

            <button type="submit" className="text-sm md:text-base text-white text-center">
              <Search color="black" />
            </button>
          </div>
        </form>

        <Rodal
          visible={isModalOpen}
          onClose={onCloseModal}
        >
          <div className="flex justify-center items-center h-full">
            <div {...getRootProps({ className: 'dropzone' })}>
              <input {...getInputProps()} />
              <button
                type="button"
                onClick={open}
                className="bg-green-950 text-white rounded-lg px-4 py-2">
                  Please Select Image
              </button>
            </div>
          </div>
        </Rodal>

        <div className="flex gap-2 mt-2 absolute -bottom-8">
          {colors.map((color) => (
            <div
              key={color.hex}
              className="h-5 w-5 rounded-full"
              style={{ backgroundColor: `${color.hex}` }}
            />)
          )}
        </div>
      </div>
    </div>
  )
}

export default Header
