import { useMemo } from 'react'

import { cn } from '@/api'
import { PauseThinIcon, PlayThinIcon, ReplayThinIcon } from '@/assets'
import { IconSwap } from '@/components'
import { useAppSelector } from '@/hooks'

import { usePlaying } from '../../../hooks'
import { selectPlayerEnded, selectPlayerPlaying } from '../../../player.slice'

export function PlayButton() {
  const playing = useAppSelector(selectPlayerPlaying)
  const ended = useAppSelector(selectPlayerEnded)
  const id = useMemo(() => {
    if (ended) return 'Replay'
    return playing ? 'Pause' : 'Play'
  }, [playing, ended])
  const Icon = useMemo(() => {
    switch (id) {
      case 'Replay':
        return ReplayThinIcon
      case 'Pause':
        return PauseThinIcon
      case 'Play':
        return PlayThinIcon
    }
  }, [id])
  const { onClick } = usePlaying()

  return (
    <button
      className={cn(
        'text-white w-[3.5rem] h-[3.5rem]',
        'flex items-center justify-center',
        'transition-colors hover:bg-white/10 active:bg-white/20',
        'rounded-full bg-black/40 mx-[2.75rem]',
      )}
      onClick={onClick}
    >
      <IconSwap id={id}>
        <Icon className='w-[2.375rem] h-[2.375rem]' />
      </IconSwap>
    </button>
  )
}
