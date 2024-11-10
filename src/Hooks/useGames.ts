import UseData from './UseData'

export interface Iplatform {
    id: number
    name: string
    slug: string
}

export interface Igame {
    id: number
    name: string
    background_image: string
    parent_platforms: {
        platform: Iplatform
    }[]
    metacritic: number
}
const useGames = () => UseData<Igame>('/games')

export default useGames
