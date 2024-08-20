const { default: axios } = require("axios")

const apiUrl = 'http://localhost:1337/api'

export const getSinglePage = (slug) => axios.get(`${apiUrl}/${slug}`).then((resp) => resp.data)

export const getAllAuthors = () => axios.get(`${apiUrl}/authors`).then((resp) => resp.data)

export const getAuthor = (slug) => axios.get(`${apiUrl}/authors?filters[slug][$eq]=${slug}&populate[0]=works&populate[1]=works.category`).then((resp) => resp.data)

export const getWorkByCategory = (author, category) => axios.get(`${apiUrl}/works?filters[$and][0][authors][slug][$eq]=${author}&filters[$and][1][category][slug][$eq]=${category}&populate=*`).then((resp) => resp.data)

export const getWorkById = (id) => axios.get(`${apiUrl}/works/${id}?populate[0]=authors`).then((resp) => resp.data).catch((err) => console.log(err))

export const getWorkByTitle = (title) => axios.get(`${apiUrl}/works?filters[$and][0][title][$contains]=${title}`).then((resp) => resp.data)

export const getSingleManifest = (slug) => axios.get(`${apiUrl}/manifests?filters[$and][0][slug][$eq]=${slug}&populate=*`).then((resp) => resp.data)

export const getAllManifests = () => axios.get(`${apiUrl}/works?filters[$and][0][category][title][$eq]=მანიფესტი&populate=*`)

export const getManifestById = (id) => axios.get(`${apiUrl}/works/${id}?populate[0]=authors`).then((resp) => resp.data).catch((err) => console.log(err))