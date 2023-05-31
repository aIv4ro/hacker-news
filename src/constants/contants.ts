export const baseUrl = 'https://hacker-news.firebaseio.com/v0'
export const jsonUrlExtension = 'json?print=pretty'

export const buildUrl = (suffix: string) => `${baseUrl}/${suffix}.${jsonUrlExtension}`
