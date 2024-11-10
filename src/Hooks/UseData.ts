import APIProvide from '@/sevices/API-provide'
import { CanceledError } from 'axios'
import { useEffect, useState } from 'react'

interface IfetchResponse<T> {
    count: number
    results: T[]
}

function UseData<T>(endpoint: string) {
    const [data, setData] = useState<T[]>([])
    const [errors, setErrors] = useState<string>('')
    const [isLoading, setIsLoading] = useState<boolean>(false)

    useEffect(() => {
        const controller = new AbortController()

        setIsLoading(true)
        APIProvide.get<IfetchResponse<T>>(endpoint, {
            signal: controller.signal,
        })
            .then((response) => {
                setData(response.data.results)
                setIsLoading(false)
            })

            .catch((error) => {
                if (error instanceof CanceledError) return
                setErrors(error.message)
            })

        return () => controller.abort()
    }, [])

    return { data, errors, isLoading }
}

export default UseData
