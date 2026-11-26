function Home(props) {
    console.log(props);
    return (
        <>
            <h1>This is Home Component</h1>
            <h2>Name : {props.name}</h2>
            <h2>Age : {props.age}</h2>
            <h2>College : {props.college}</h2>
        </>
    )
}


export default Home;