import APIProvide from '@/sevices/API-provide'
import { CanceledError } from 'axios'
import { useEffect, useState } from 'react'

interface Igame {
    id: number
    name: string
}

interface IfetchGameResponse {
    results: Igame[]
    count: number
}
const useGames = () => {
    const [games, setGames] = useState<Igame[]>([])
    const [errors, setErrors] = useState<string>('')

    useEffect(() => {
        const controller = new AbortController()

        APIProvide.get<IfetchGameResponse>('/games', {
            signal: controller.signal,
        })
            .then((response) => {
                setGames(response.data.results)
            })
            .catch((error) => {
                if (error instanceof CanceledError) return
                setErrors(error.message)
            })

        return () => controller.abort()
    }, [])

    return { games, errors }
}

export default useGames
