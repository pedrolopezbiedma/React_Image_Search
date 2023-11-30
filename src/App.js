import SearchBar from "./components/SearchBar";

const App = () => {
    const handleSearch = () => {
        console.log('He llamado al handleSearch');
    }

    return(
        <div>
            <h1>This is App!</h1>
            <SearchBar handleSearch = { handleSearch } />
        </div>
    )
}

export default App;