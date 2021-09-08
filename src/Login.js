function Login() {

  const login = async function() {
    const email = ..
    const password = ..

    const response = await axios.post('/login', { email, password }) 
    const token = response.data.token
    localStorage.setItem("token", token)
  }

  return (
    <>
      <input type="text" />
      <input type="text" />
      <button onClick={login}>Ingresar</button>
    </>
  )
}