import { useState } from "react"

const App = () => {
  const [data, setdata] = useState({
    username: "",
    password: "",
    email: "",
    checked: false,
    radio: "male",
    option: "option 2",
    textarea: "this is text area"
  })

  const submit = (e) => {
    e.preventDefault()
    console.log(data)
  }
  return (
   <>
    <form onSubmit={submit}>
      <input type="text" placeholder="username" value={data.username} onChange={(e)=> setdata({...data, username: e.target.value})}/> <br /><br />
      <input type="text" placeholder="password" value={data.password} onChange={(e)=> setdata({...data, password: e.target.value})} name="password"/><br /><br />
      <input type="text" placeholder="email" value={data.email} onChange={(e)=> setdata({...data, email: e.target.value})} name="email"/> <br /><br />
      <input type="checkbox" checked = {data.checked} onChange={(e)=> setdata({...data, checked: e.target.checked})}/> <br /><br />
      <input type="radio" name="a" checked={data.radio === "male" ? true : false} value="male" onChange={(e)=> setdata({...data, radio: e.target.value})}/> Male   
      <input type="radio" name="a" checked= {data.radio === "female" ? true : false} value="female" onChange={(e)=> setdata({...data, radio: e.target.value})}/> Female <br /> <br />
      <select value={data.option} onChange={(e)=> setdata({...data, option: e.target.value})}>
        <option value="option 1">option 1</option>
        <option value="option 2">option 2</option>
        <option value="option 3">option 3</option>
      </select> <br /><br />
      <textarea value={data.textarea} onChange={(e)=> setdata({...data, textarea: e.target.value})}></textarea> <br /><br />
      <button>Submit</button>
    </form>
   </>
  )
}

export default App