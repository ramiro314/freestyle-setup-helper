export const toInches = (value, unit) => {
    switch (unit) {
        case "in":
            return value
        case "mm":
            return value / 25.4
        default:
            throw `Unknown unit ${unit}`
    }
}

export const toMillimeter = (value, unit) => {
    switch (unit) {
        case "in":
            return value * 25.4
        case "mm":
            return value
        default:
            throw `Unknown unit ${unit}`
    }
}
