import type { CSSProperties, ImgHTMLAttributes } from 'react'

type NextImageLikeProps = ImgHTMLAttributes<HTMLImageElement> & {
  src: string
  alt: string
  width?: number
  height?: number
  priority?: boolean
}

function NextImageShim({
  src,
  alt,
  width,
  height,
  style,
  ...rest
}: NextImageLikeProps) {
  const mergedStyle: CSSProperties = {
    maxWidth: '100%',
    height: 'auto',
    ...style,
  }

  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      style={mergedStyle}
      {...rest}
    />
  )
}

export default NextImageShim
