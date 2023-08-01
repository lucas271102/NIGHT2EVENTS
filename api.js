let apiUrl='http://localhost:8000'
if (process.env.NODE_ENV==='PRODUCTION'){
    apiUrl= import.meta.env.VITE_API
}
export default apiUrl