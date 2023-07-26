let apiUrl='https://night2api.onrender.com'
if (process.env.NODE_ENV==='PRODUCTION'){
    apiUrl= import.meta.env.VITE_API
}
export default apiUrl