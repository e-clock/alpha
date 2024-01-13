import { create, type StateCreator } from 'zustand'

export type NotificationType = 'error' | 'info' | 'success' | 'warning'

export interface NotificationState {
  title: string
  message: string
  type: NotificationType
  show: boolean
}

interface Actions {
  setNotification: (title: string, message: string, type: NotificationType) => void
  setShow: (show: boolean) => void
}

export type NotificationStore = NotificationState & Actions

const state: StateCreator<NotificationStore> = (set) => ({
  title: '',
  message: '',
  type: 'success',
  show: false,
  setNotification: (title, message, type) => { set({ title, message, type, show: true }) },
  setShow: (show) => { set({ show }) }
})

export const useNotificationStore = create<NotificationStore>(state)
