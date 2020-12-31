import cn from 'classnames'

/**
 * @param {Object} props
 * @param {number} [props.columns]
 * @param {string} [props.gap]
 * @param {string} [props.className]
 * @returns {import('react').ReactElement}
 */
export default function Grid({ columns = 1, gap = '0', className, children }) {
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
