import UseData from './UseData'

export interface IGenres {
    id: number
    name: string
}

const UseGendres = () => UseData<IGenres>('/genres')

export default UseGendres
