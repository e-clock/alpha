'use client'

import { useState, forwardRef, type Ref } from 'react'
import { clsx } from 'clsx'
import { EyeFilledIcon, EyeSlashFilledIcon } from '../../icons'
import { Input, type InputProps } from '@nextui-org/input'

export const InputPassword = forwardRef((props: InputProps, ref: Ref<HTMLInputElement>) => {
  const { className, isInvalid } = props
  const [isVisible, setIsVisible] = useState(false)
  const toggleVisibility = () => { setIsVisible(!isVisible) }

  return (
        <Input
            type={isVisible ? 'text' : 'password'}
            label='Password'
            isRequired
            size='md'
            radius='sm'
            labelPlacement='outside'
            variant="bordered"
            isInvalid={isInvalid}
            errorMessage={isInvalid && 'Please enter a valid value'}
            className={clsx('w-full h-10', className)}
            classNames={{ label: 'select-none' }}
            endContent={
                <button className="focus:outline-none" type="button" onClick={toggleVisibility}>
                    {isVisible
                      ? (
                            <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                        )
                      : (
                            <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                        )}
                </button>
            }
            ref={ref}
            {...props}
        />
  )
})

InputPassword.displayName = 'InputPassword'
