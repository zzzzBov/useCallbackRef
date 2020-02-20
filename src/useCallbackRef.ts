import { useRef } from 'react'

interface ICallbackHandle<T extends Function> {
  callback: T
  handle: T
}

export const useCallbackRef = <T extends Function>(callback: T): T => {
  const ref = useRef<ICallbackHandle<T> | null>(null)

  if (ref.current) {
    ref.current.callback = callback
    return ref.current.handle
  }

  const handle = (function (this: any, ...args: any[]): any {
    return ref?.current?.callback.apply(this, args)
  } as unknown) as T

  ref.current = {
    callback,
    handle
  }

  return ref.current.handle
}
