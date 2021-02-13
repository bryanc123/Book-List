const Book = props => {
    const link = `https://openlibrary.org${props.book.key}`;
    return (
        <div style={{backgroundColor: props.bgColor, display: "flex", flexWrap: "wrap", padding: "10px", margin:"20px 0", lineHeight: "2rem"}}>
            <div style={{minWidth: "200px"}}>
                { props.book.cover_edition_key ?
                    <img src={`http://covers.openlibrary.org/b/olid/${props.book.cover_edition_key}-M.jpg`} /> :
                    <p>(No cover image found)</p>
                }
            </div>
            <div style={{marginLeft: "20px"}}>
                <p className="title" style={{fontSize:"24px", fontWeight: "bold"}}>{props.book.title}</p>
                <p><span style={{fontWeight: "bold"}}>Author:</span> {props.book.author_name}</p>
                <p><span style={{fontWeight: "bold"}}>ISBN:</span> {props.book.isbn ? props.book.isbn[0] : "Cannot be found"}</p>
                <p><span style={{fontWeight: "bold"}}>Link: </span>
                    <a href={link}>{link}</a></p>
            </div>
        </div>
    );
}

export default Book;