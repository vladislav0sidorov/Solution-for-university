import { createContext, useContext } from 'react'

export const ImageSizeContext = createContext<number>(0)
export const useImageSize = () => useContext(ImageSizeContext)
