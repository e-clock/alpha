import { NotificationPanel } from './notification-panel'

export function Notification() {
  return (
        <div
            aria-live="assertive"
            className="pointer-events-none fixed inset-0 flex items-start px-4 py-6 sm:p-6"
        >
            <div className="flex w-full flex-col items-center space-y-4">
                <NotificationPanel />
            </div>
        </div>
  )
}
