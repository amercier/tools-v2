import cn from 'classnames'
import { FC, PropsWithChildren } from 'react'

interface GridProps {
  columns?: number
  gap?: string
  className?: string
}

const Grid: FC<PropsWithChildren<GridProps>> = ({
  columns = 1,
  gap = '0',
  className,
  children,
}) => {
  return (
    <div className={cn('grid', className)}>
      {children}

      <style jsx>{`
        .grid {
          display: grid;
          gap: ${gap};
          grid-template-columns: repeat(${columns}, 1fr);
          min-height: 10rem;
        }
      `}</style>
    </div>
  )
}

export default Grid
