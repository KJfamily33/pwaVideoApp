export let throttle = function(func: any, delay: number) {
  let last: number, deferTimer: number
  return function(args: any) {
    // @ts-ignore
    let that = this
    let _args = arguments
    let now = +new Date()
    if (last && now < last + delay) {
      clearTimeout(deferTimer)
      deferTimer = setTimeout(function() {
        last = now
        func.apply(that, _args)
      }, delay)
    } else {
      last = now
      func.apply(that, _args)
    }
  }
}

export let debounce = function(func: any, delay: number) {
  return function(args: any) {
    // @ts-ignore
    let that = this
    let _args = args
    clearTimeout(func.id)
    func.id = setTimeout(function() {
      func.call(that, _args)
    }, delay)
  }
}
