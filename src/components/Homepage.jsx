function Homepage({setType}) {
    function handleSubmit(e)
    {
        e.preventDefault();
        const formData = new FormData(e.target);
        const {type} = Object.fromEntries(formData);
        setType(type);
    }
    return (
        <>
        <h1 className="hero-heading">Welcome!</h1>
        <form className="form" onSubmit={handleSubmit}>
            <div className="levels_container">
                <input type="radio" value={'easy'} name="type" id="easy" />
                <label htmlFor="easy">Easy</label>
                <input type="radio" value={'normal'}  name="type" id="normal" />
                <label htmlFor="normal">Normal</label>
                <input type="radio" value={'hard'}  name="type" id="hard" />
                <label htmlFor="hard">Hard</label>
            </div>
            <button type="submit">Start</button>
        </form>
        </>
    )
}

export default Homepage
