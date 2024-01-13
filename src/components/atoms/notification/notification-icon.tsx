import { CheckCircleIcon, XCircleIcon, ExclamationTriangleIcon, InformationCircleIcon } from '@heroicons/react/24/outline'
import { type NotificationType } from '@/stores'

interface Props {
  type: NotificationType
}

export const NotificationIcon = ({ type }: Props) => {
  switch (type) {
    case 'error':
      return <XCircleIcon className="h-6 w-6 text-danger" aria-hidden="true" />
    case 'success':
      return <CheckCircleIcon className="h-6 w-6 text-success" aria-hidden="true" />
    case 'warning':
      return <ExclamationTriangleIcon className="h-6 w-6 text-warning" aria-hidden="true" />
    case 'info':
      return <InformationCircleIcon className="h-6 w-6 text-focus" aria-hidden="true" />
    default:
      return <></>
  }
}
