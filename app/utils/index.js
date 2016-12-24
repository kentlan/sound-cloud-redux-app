/*eslint no-bitwise: "off"*/
export const parseDuration = (duration) => {
  const module = duration / 1000 % 3600
  const fraction = duration / 3600000
  const pad2 = (num) => `${num}`.replace(/^(\d)$/, '0$1')
  return `${pad2(~~fraction)}:${pad2(~~(module / 60))}:${pad2(~~(module % 60))}`
}
