import { useState } from "react"

const SearchBar = ({ handleSearch }) => {
    const [term, setTerm] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        handleSearch(term)
        setTerm('')
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input value={term} onChange={(event) => setTerm(event.target.value)}/>
            </form>
        </div>
    )
}

export default SearchBar