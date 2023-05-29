export const formatStringArray = (strings: string[]): string => {
  const length = strings.length

  if (length === 0) {
    return ''
  }

  if (length === 1) {
    return strings[0]
  }

  if (length === 2) {
    return `${strings[0]} and ${strings[1]}`
  }

  const lastString = strings[length - 1]
  const otherStrings = strings.slice(0, length - 1).join(', ')

  return `${otherStrings} and ${lastString}`
}
