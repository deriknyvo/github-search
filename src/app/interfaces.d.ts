export interface Filter {
    id: string,
    selected: boolean,
    label: string
}

export interface UserResponse {
    items: User[]
}

export interface User {
    avatar_url: string,
    followers_url: string,
    repos_url: string
}

export interface RepositoryResponse {
    items: Repository[]
}

export interface Repository {
    full_name: string,
    language: string,
    languages_url: string,
}