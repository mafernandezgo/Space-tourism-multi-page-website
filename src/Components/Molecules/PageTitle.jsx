import './pageTitle.css'
function PageTitle ({num, name}){
    return (
        <section className="pageTitle">
            <h1 className="title"><span className="numTitle"> {num}</span> {name}</h1>
        </section>
    )
}

export default PageTitle