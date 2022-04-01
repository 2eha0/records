import Image from 'next/image'
import { Record } from '../types'

type Props = Record

const Score: React.FC<Pick<Props, 'score'>> = ({ score }) => {
  switch (score) {
    case 1:
      return <big className='font-bold text-black-500'>😡 不看也罢</big>
    case 2:
      return <big className='font-bold text-green-500'>🥱 无聊</big>
    case 3:
      return <big className='font-bold text-blue-500'>🤔 还行</big>
    case 4:
      return <big className='font-bold text-violet-500'>🤩 值得一看</big>
    case 5:
      return <big className='font-bold text-orange-500'>💯 神作！</big>
  }
}

export const Card: React.FC<Props> = (props) => {
  return (
    <section className='relative before:content-[""] before:border-l-2 before:absolute before:inset-y-0 before:-left-9 before:translate-x-[0.44em] pb-10 first:before:top-1 last:before:bottom-10'>
      <p className='text-slate-400 text-xs mb-2 sm:text-base sm:mb-3 relative'>
        { new Date(props.date).toLocaleDateString() }

        <i className='absolute w-4 h-4 rounded-full bg-slate-200 -left-9 top-1/2 translate-y-[-50%]' />
      </p>
      <div className="flex items-start">
        <div className="flex-1 mr-2">
          <p className='text-md mb-2 sm:text-2xl sm:mb-3 leading-6 text-slate-900'>
            { props.title }
            <span className='text-slate-400'>（{props.year}）</span>
          </p>
          <p className='text-xs sm:text-base text-slate-700'>
            <span className='text-slate-400'>评分：</span>
            <Score score={ props.score } />
          </p>

          <div className="bg-white text-xs text-slate-500 leading-2 mt-4 sm:text-base">
            { props.comment }
          </div>
        </div>
        <div className='flex-none w-1/6 rounded-md sm:w-[5rem] sm:rounded-xl overflow-hidden'>
          <Image
            src={ props.img }
            layout='responsive'
            width={86}
            height={128}
            alt={ props.title }
          />
        </div>
      </div>
    </section>
  )
}
