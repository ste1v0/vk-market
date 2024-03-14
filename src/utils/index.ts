export function sixthSpace(str: string) {
    const separatedArr = str.split(' ')
    return separatedArr.slice(0, 6).join(' ')
}

export function thirdSpace(str: string) {
    const separatedArr = str.split(' ')
    return separatedArr.slice(0, 3).join(' ')
}

export function currency(value: number | JSX.Element) {
    return new Intl.NumberFormat('ru-RU', { style: 'currency', currency: 'RUB', maximumFractionDigits: 0 }).format(+value)
}