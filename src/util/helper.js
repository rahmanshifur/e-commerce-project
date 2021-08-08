export const setLocalData = (key, data) => {
    localStorage.setItem([key], JSON.stringify(data))
}

export const getLocalData = (key) => {
    let data = localStorage.getItem([key])
    if (!data)
        return []
    return JSON.parse(data)
}