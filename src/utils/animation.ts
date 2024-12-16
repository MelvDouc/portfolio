export function setIntervalOnAnimationFrame(callback: VoidFunction, interval: number, abortController: AbortController): void {
  let prevTime = 0;
  let handle: number;
  abortController.signal.onabort = () => {
    cancelAnimationFrame(handle);
  };

  const animate = (time: number) => {
    handle = requestAnimationFrame(animate);

    if (time - prevTime < interval)
      return;

    prevTime = time;
    callback();
  };

  animate(interval);
}