import React, { useEffect, useRef, useState } from 'react'

function useInterval(callback: (arg?: any) => any, delay: number) {
  const savedCallback = useRef<(arg?: any) => any>()

  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback
  }, [callback])

  // Set up the interval.
  useEffect(() => {
    function tick() {
      if (savedCallback.current) {
        savedCallback.current()
      }
    }
    if (delay !== null) {
      const id = setInterval(tick, delay)
      return () => clearInterval(id)
    }
  }, [delay])
}
