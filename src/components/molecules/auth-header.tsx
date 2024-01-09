import { Logo } from '../atoms'

interface Props {
  title: string
  desciption?: string
}

export function AuthHeader ({ title, desciption = '' }: Props) {
  return (
        <div className='grid place-items-center'>
            <Logo />
            <h2 className='mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-foreground'>
                {title}
            </h2>
            <p className='mt-2 text-left text-sm text-foreground/70'>
                {desciption}
            </p>
        </div>
  )
}
