export const useBuildQueryString = () => {
  const buildQueryString = (params: { [key: string]: string | number }, prefix = '?') => {
    const queryString = []

    for (const key in params) {
      if (params.hasOwnProperty(key)) {
        const value = params[key]
        queryString.push(
          `${encodeURIComponent(key)}=${encodeURIComponent(value)}`
        )
      }
    }

    return prefix + queryString.join('&')
  }

  return {
    buildQueryString
  }
}