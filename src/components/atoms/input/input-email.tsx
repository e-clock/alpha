import { forwardRef, type Ref } from 'react'
import { clsx } from 'clsx'
import { Input, type InputProps } from '@nextui-org/input'

export const InputEmail = forwardRef((props: InputProps, ref: Ref<HTMLInputElement>) => {
  const { className, isInvalid } = props

  return (
    <Input
      type='email'
      label='Email'
      isRequired
      size='md'
      radius='sm'
      labelPlacement='outside'
      variant="bordered"
      isInvalid={isInvalid}
      errorMessage={isInvalid && 'Please enter a valid email address'}
      className={clsx('w-full h-10', className)}
      classNames={{ label: 'select-none' }}
      isClearable
      ref={ref}
      {...props}
    />
  )
})

InputEmail.displayName = 'InputEmail'
