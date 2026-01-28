const START_DATE = new Date(2019, 9, 9) // 9-Oct-2019

const numberToWords = (num: number): string => {
  const words = [
    'Zero',
    'One',
    'Two',
    'Three',
    'Four',
    'Five',
    'Six',
    'Seven',
    'Eight',
    'Nine',
    'Ten',
    'Eleven',
    'Twelve',
  ]
  return words[num] ?? num.toString()
}

export const YearsOfExperienceText = (): string => {
  const now = new Date()

  let years = now.getFullYear() - START_DATE.getFullYear()
  let months = now.getMonth() - START_DATE.getMonth()

  if (months < 0) {
    years--
    months += 12
  }

  if (months > 6) {
    return `Nearly ${numberToWords(years + 1)}`
  }

  return numberToWords(years)
}
