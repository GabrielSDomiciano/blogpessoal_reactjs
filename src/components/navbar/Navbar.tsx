import { useNavigate } from "react-router-dom"
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
                      Temas
                      Cadastrar tema
                      Perfil
                      Sair
                  </div>
              </div>
          </div>
      </>
  )
}

export default Navbar