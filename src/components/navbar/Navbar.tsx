import { Link, useNavigate } from "react-router-dom"
import { AuthContext } from "../../contexts/AuthContexts"
import { useContext } from "react"

function Navbar() {

    const navigate = useNavigate()

    const { handleLogout} = useContext(AuthContext)

    function logout(){
        handleLogout()
        alert('o usuario foi desconectado1!')
        navigate('')
    }
  return (
      <>
          <div className='w-full flex justify-center py-4
                   bg-indigo-900 text-white'>

          
              <div className="container flex justify-between text-lg">
                  Blog Pessoal

                  <div className='flex gap-4'>
                      Postagens
                      <Link to='/temas' className='hover:underline'>Temas</Link>
                      <Link to='/cadastrartema' className='hover:underline'>Cadastrar tema</Link>
                      Temas
                      Cadastrar tema
                      Perfil
                      <Link to=" " onClick={logout} >

                      Sair
                      </Link>
                    
                  </div>
              </div>
          </div>
      </>
  )
}

export default Navbar
