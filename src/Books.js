import { useState, useEffect } from "react";
import Book from "./Book";

const Books = props => {
    const [books, setBooks] = useState([]);
    const [query, setQuery] = useState('');
    const [loading, setLoading] = useState(false);

    const fetchBooks = async (searchTerm) => {
        searchTerm = searchTerm.trim().replace(/\s\s+/g, ' ');
        if(searchTerm) {
            setLoading(true);
            const response = await fetch(`http://openlibrary.org/search.json?title=${searchTerm}`);
            let results = await response.json();

            // if there are less than 10 results, then slice accordingly
            // otherwise, make a slice of 10 items
            results = results.docs.length >= 10 ?
                results.docs.slice(0, 10) :
                results.docs.slice(0, results.docs.length);
            setBooks(results);
            setLoading(false);
            console.log(results.length);
        }
    };

    const setSearch = searchTerm => {
        setQuery(searchTerm);
    };

    return (
        <div style={{padding:'20px'}}>
            <div className="searchSection" style={{padding: "10px"}}>
                <p>This application uses the experimental search API of <a href="https://openlibrary.org">OpenLibrary</a></p>
                <div className="searchForm" style={{margin:"20px 0"}}>
                    <input
                        type="text"
                        value={query}
                        onChange={(e) => setSearch(e.target.value)}
                        style={{fontSize: "24px"}}
                    />
                    <button
                        className='search-button'
                        style={{fontSize:'1rem', padding:'10px', marginLeft: '10px'}}
                        onClick={() => fetchBooks(query)}
                    >
                        Search
                    </button>
                </div>
            </div>
            { loading ? <p>Loading...</p> : books.map((book, i) => {
                const bgColor = i % 2 === 0 ? "#F5F5F5" : "white";
                console.log(bgColor);
                return <Book book={book} key={book.key} bgColor={bgColor} />;
            })}
        </div>
    )
}

export default Books;