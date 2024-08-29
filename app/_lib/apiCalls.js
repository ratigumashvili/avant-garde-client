const { default: axios } = require("axios")

const apiUrl = process.env.NEXT_PUBLIC_API_URL

export const getSinglePage = (slug) => axios.get(`${apiUrl}/${slug}`).then((resp) => resp.data).catch((error) => error.message)

export const getAllAuthors = (params) => axios.get(`${apiUrl}/authors?populate[0]=photo&${params}`).then((resp) => resp.data).catch((error) => error.message)

export const getAuthor = (slug) => axios.get(`${apiUrl}/authors?filters[slug][$eq]=${slug}&populate[0]=works&populate[1]=works.category&populate[2]=photo`).then((resp) => resp.data).catch((error) => error.message)

export const getAllWorks = (params) => axios.get(`${apiUrl}/works?populate[0]=authors&${params}`).then((resp) => resp.data).catch((error) => error.message)

export const getWorkByCategory = (author, category, params) => axios.get(`${apiUrl}/works?filters[$and][0][authors][slug][$eq]=${author}&filters[$and][1][category][slug][$eq]=${category}&populate=*&${params}`).then((resp) => resp.data).catch((error) => error.message)

export const getWorkById = (id) => axios.get(`${apiUrl}/works/${id}?populate[0]=authors&populate[1]=images`).then((resp) => resp.data).catch((err) => console.log(err)).catch((error) => error.message)

export const getWorkByTitle = (title, params) => axios.get(`${apiUrl}/works?filters[$and][0][title][$contains]=${title}&populate=*&${params}`).then((resp) => resp.data).catch((error) => error.message)

export const getWorksBySlug = (slug, params) => axios.get(`${apiUrl}/works?filters[$and][0][category][slug][$eq]=${slug}&${params}`).catch((error) => error.message)

export const getSingleManifest = (slug) => axios.get(`${apiUrl}/manifests?filters[$and][0][slug][$eq]=${slug}&populate=*`).then((resp) => resp.data).catch((error) => error.message)

export const getManifestById = (id) => axios.get(`${apiUrl}/works/${id}?populate[0]=authors`).then((resp) => resp.data).catch((err) => console.log(err)).catch((error) => error.message)

export const getNoAuthorWork = (params) => axios.get(`${apiUrl}/works?filters[$and][0][category][slug][$eq]=uavtoro&${params}`).then((resp) => resp.data).catch((error) => error.message)

export const getWorkByVarious = (slug, params) => axios.get(`${apiUrl}/works?filters[$and][0][category][slug][$eq]=${slug}&populate=*&${params}`).catch((error) => error.message)
