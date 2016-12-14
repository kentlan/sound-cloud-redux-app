import fakeResponse from '../search-stub'

const Soundcloud = function Soundcloud() {
  this.search = function search() {
    const fakeTimeout = Math.random() * 900
    return new Promise((resolve, reject) => {
      if (fakeTimeout < 800) {
        setTimeout(() => {
          resolve(fakeResponse)
        }, fakeTimeout)
      } else {
        const error = new Error('Internal server error')
        error.code = '500'
        reject(error)
      }
    })
  }
}

export default Soundcloud
