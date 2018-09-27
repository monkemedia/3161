const version = 'v1'
const localhost = `http://localhost:4000/api/${version}`
const production = `https://swansea-masons-api.herokuapp.com/api/${version}`

export const baseURL = process.env.ENV === 'development' ? localhost : production
