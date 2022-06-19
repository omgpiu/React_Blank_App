import { handleSetAppStatus, handleThunkSuccess, ThunkAPIType } from './AppStatusHandlers'

type ThunkCreatorType = {
  apiMethod: () => any
  status?: number
  errorCallback?: () => void
  notification?: {
    show: boolean
    notifySuccess?: string
    notifyError?: string
  }
}

export const ThunkCreator = async (creator: ThunkCreatorType, thunkAPI: ThunkAPIType) => {
  creator.status = creator.status ? creator.status : 200
  handleSetAppStatus('loading', thunkAPI)
  try {
    const res = await creator.apiMethod()

    if (res.status === creator.status) {
      handleThunkSuccess({ showNotify: creator.notification?.show, message: creator.notification?.notifySuccess }, thunkAPI)
      return res.data
    }
  } catch (error: any) {
    creator.errorCallback && creator.errorCallback()
    return handleThunkSuccess({ showNotify: creator.notification?.show, message: creator.notification?.notifyError || error }, thunkAPI)
  }
}
