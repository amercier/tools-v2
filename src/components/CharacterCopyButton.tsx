import { FC } from 'react'
import CopyButton from './CopyButton'

interface CharacterCopyButtonProps {
  name: string
  symbol: string
}

const CharacterCopyButton: FC<CharacterCopyButtonProps> = ({
  name,
  symbol,
}) => {
  return (
    <CopyButton title={name} text={symbol}>
      <div className="character">
        <span className="symbol">{symbol}</span>
        <span className="name" title={name}>
          {name}
        </span>
      </div>

      <style jsx>{`
        .character {
          display: flex;
          align-items: center;
          justify-content: flex-start;
          width: 100%;
          height: 2rem;
          overflow: hidden;
        }

        .symbol {
          font-size: 2rem;
          line-height: 1.2rem;
          font-family: 'Noto Sans';
        }

        .name {
          display: block;
          margin-left: 0.5rem;
          font-size: 14px;
          font-weight: normal;
          line-height: 1rem;
          hyphens: auto;
          text-align: left;
          text-transform: none;
          text-overflow: ellipsis;
          max-height: 100%;
          overflow: hidden;
        }
      `}</style>
    </CopyButton>
  )
}

export default CharacterCopyButton
