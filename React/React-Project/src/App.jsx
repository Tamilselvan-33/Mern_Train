
import Home from './Home.jsx'
import './App.css'

function Players(props) {
  console.log(props);
  return (
    <>
      <h1>This is Players Component</h1>
      <h2>Player Name : {props.obj.name}</h2>
      <h2>Player Age : {props.obj.age}</h2>
      <h2>Player College : {props.obj.college}</h2>
    </> 
  )
}

function Data(props) {
  console.log(props);
  return (
    <>
      <h1>This is Data Component</h1>
      <h2>College Name : {props.college}</h2>
    </>
  )
}


function Employees(props) {
  return (
    <div>
      <h1>Employees List</h1>

      <div className="employees-grid">
        {props.data.map((item, index) => (
          <div key={index} className="employee">
            <h3>{item.name}</h3>
            
            <p className="employee-info">
              <span>Age</span>
              <span className="badge">{item.age} yrs</span>
            </p>

            <p className="employee-info">
              <span>College</span>
              <span className="badge">{item.college}</span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

function App() {

  let details = {
    name : "Tamil",
    age : 22,
    college : "SECE College"
  }

  let employees = [
    {
      name : "Tamil",
      age : 22,
      college : "SECE College"
    },
    {
      name : "Saran",
      age : 69,
      college : "SECE College"
    },
    {
      name : "Nishanth",
      age : 96,
      college : "SECE College"
    }
  ]

  return (
    <>
      <h1>This is APP Component</h1>
      {/* <h2>Js File</h2>  */}
      {/* <Home name = "Tamil" age = "22" college = "SECE College"/> */}
      {/* <Data college = "SECE" /> */}
      <Players obj = {details} />
      <Employees data = {employees} />
    </> 
  )
}
export default App;