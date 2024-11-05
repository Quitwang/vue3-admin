export const debounce = (func: (...args: object[]) => void, timeout: number, immediate: boolean): (() => void) => {
  let timer: number | null = null; // 定义一个定时器变量，用于控制函数的执行

  return (...args: object[]) => {
    // 使用箭头函数直接保持this上下文
    if (timer) clearTimeout(timer); // 如果定时器存在，则清除之前的定时器
    if (immediate) {
      // 如果immediate为true，立即执行一次函数
      const callNow = !timer; // 如果定时器不存在，表示可以立即执行
      timer = window.setTimeout(() => {
        // 重新设置定时器，防止函数在timeout时间内被多次执行
        timer = null; // 定时器执行后清空定时器
      }, timeout) as unknown as number;
      if (callNow) func.apply(this, args); // 使用this而不是context
    } else {
      // 如果immediate为false，只在停止调用后执行函数
      timer = window.setTimeout(() => {
        // 设置定时器，延迟执行函数
        func.apply(this, args); // 使用this而不是context
      }, timeout);
    }
  };
};
