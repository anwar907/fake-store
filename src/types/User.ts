

export interface User {
    id: string,
    email: string,
    username: string,
    ip_address: string,
    name: string,
    data: Record<string, any>,
    geo: {
        region: string,
        country_code: string
    }
}

export interface MetaData {
    function: string,
    in_app_frame_mix: string,
    value: string
}