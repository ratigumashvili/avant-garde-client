const { default: axios } = require("axios")

const apiUrl = 'http://localhost:1337/api'

export const getSinglePage = (slug) => axios.get(`${apiUrl}/${slug}`).then((resp) => resp.data)

export const getAllAuthors = () => axios.get(`${apiUrl}/authors?pagination[page]=1&pagination[pageSize]=30`).then((resp) => resp.data)

export const getAuthor = (slug) => axios.get(`${apiUrl}/authors?filters[slug][$eq]=${slug}&populate[0]=works&populate[1]=works.category`).then((resp) => resp.data)

export const getWorkByCategory = (author, category, params) => axios.get(`${apiUrl}/works?filters[$and][0][authors][slug][$eq]=${author}&filters[$and][1][category][slug][$eq]=${category}&populate=*&${params}`).then((resp) => resp.data)

export const getWorkById = (id) => axios.get(`${apiUrl}/works/${id}?populate[0]=authors&populate[1]=images`).then((resp) => resp.data).catch((err) => console.log(err))

export const getWorkByTitle = (title, params) => axios.get(`${apiUrl}/works?filters[$and][0][title][$contains]=${title}&populate=*&${params}`).then((resp) => resp.data)

export const getSingleManifest = (slug) => axios.get(`${apiUrl}/manifests?filters[$and][0][slug][$eq]=${slug}&populate=*`).then((resp) => resp.data)

export const getAllManifests = () => axios.get(`${apiUrl}/works?filters[$and][0][category][title][$eq]=მანიფესტი&populate=*`)

export const getManifestById = (id) => axios.get(`${apiUrl}/works/${id}?populate[0]=authors`).then((resp) => resp.data).catch((err) => console.log(err))

export const getNoAuthorWork = (params) => axios.get(`${apiUrl}/works?filters[$and][0][category][slug][$eq]=uavtoro&${params}`).then((resp) => resp.data)

export const getWorkByVarious = (slug, params) => axios.get(`${apiUrl}/works?filters[$and][0][category][slug][$eq]=${slug}&populate=*&${params}`)