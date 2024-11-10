import UseGendres from '@/Hooks/UseGendres'

function GenresList() {
    const { data } = UseGendres()

    return (
        <ul>
            {data.map((genre) => (
                <li key={genre.id}>{genre.name}</li>
            ))}
        </ul>
    )
}

export default GenresList
