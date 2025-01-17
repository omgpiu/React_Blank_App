import { SnackbarKey, useSnackbar } from 'notistack'
import { useEffect } from 'react'
import { useActions } from '../../../../utils/hooks/useActions'
import { useAppSelector } from '../../../../utils/hooks/useAppSelector'
import { Actions } from '../store'

let displayed: SnackbarKey[] = []

export const useContainer = () => {
  const { removeNotification } = useActions(Actions)
  const { notifications } = useAppSelector(state => state.condition)
  const { enqueueSnackbar, closeSnackbar } = useSnackbar()

  const storeDisplayed = (id: SnackbarKey) => {
    displayed = [...displayed, id]
  }

  // const removeDisplayed = (id: SnackbarKey) => {
  //   displayed = [...displayed.filter(key => id !== key)]
  // }

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-ignore
    notifications.forEach(({ key, message, options = {}, dismissed = false }) => {
      if (dismissed) {
        closeSnackbar(key)
        return
      }

      if (displayed.includes(key)) return

      enqueueSnackbar(message, {
        key,
        ...options,
      })

      storeDisplayed(key)
    })
  }, [notifications, closeSnackbar, enqueueSnackbar, removeNotification])
}

