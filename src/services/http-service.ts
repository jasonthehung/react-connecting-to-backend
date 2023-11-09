import apiClient from "./api-client"

class HttpService {
    endpoint: string

    constructor(endpoint: string) {
        this.endpoint = endpoint
    }

    getAll<T>() {
        return apiClient.get<T[]>(this.endpoint)
    }

    delete(id: number) {
        return apiClient.delete(`${this.endpoint}/${id}`)
    }

    create<T>(entity: T) {
        return apiClient.post(this.endpoint, entity)
    }

    update<T extends { id: number }>(entity: T) {
        return apiClient.patch(this.endpoint + "/" + entity.id, entity)
    }
}

const create = (endpoint: string) => new HttpService(endpoint)

export default create
