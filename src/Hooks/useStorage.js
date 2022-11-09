export function useStorage(item) {
    const getStorage = () => {
    const list = window.localStorage.getItem(item)
    return list ? JSON.parse(list) : []
  }

  return {getStorage}
}