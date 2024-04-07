interface Enviroment {
    host: unknown,
    port: unknown,
    protocol: unknown
}

export const useGetEnvironment = () : Enviroment => {
    const {VITE_API_HOST: host,VITE_API_PORT: port,VITE_API_PROTOCOL: protocol} = import.meta.env
    return {host,port,protocol}
}