export interface Filter {
    id: string,
    selected: boolean,
    label: string
}

export interface UserRequest {
    items: UserResponse[]
}

export interface UserResponse {
    avatar_url: string,
    login: string,
    followers_url: string,
    repos_url: string
}

export interface User {
    type: string,
    avatar_url: string,
    full_name: string,
    followers_url: string,
    repos_url: string
}

export interface RepositoryRequest {
    items: RepositoryResponse[]
}

export interface RepositoryResponse {
    full_name: string,
    stargazers_count: number,
    language: string,
    languages_url: string,
}

export interface Repository {
    type: string,
    full_name: string,
    stars: number,
    language: string,
    languages_url: string,
}