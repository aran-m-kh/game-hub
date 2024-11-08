import APIProvide from '@/sevices/API-provide'
import { CanceledError } from 'axios'
import { useEffect, useState } from 'react'

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

interface IfetchGameResponse {
    results: Igame[]
    count: number
}
const useGames = () => {
    const [games, setGames] = useState<Igame[]>([])
    const [errors, setErrors] = useState<string>('')
    const [isLoading, setIsLoading] = useState<boolean>(false)

    useEffect(() => {
        const controller = new AbortController()

        setIsLoading(true)
        APIProvide.get<IfetchGameResponse>('/games', {
            signal: controller.signal,
        })
            .then((response) => {
                setGames(response.data.results)
                setIsLoading(false)
            })

            .catch((error) => {
                if (error instanceof CanceledError) return
                setErrors(error.message)
            })

        return () => controller.abort()
    }, [])

    return { games, errors, isLoading }
}

export default useGames
