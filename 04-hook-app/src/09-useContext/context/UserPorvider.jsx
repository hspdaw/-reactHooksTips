import { UserContext } from "./UserContext"

const user = {
    id: 2,
    name: 'Juan',
    email: 'juan@juan.com'
}
export const UserPorvider = ({children}) => {
  return (
    <UserContext.Provider value={{hola:'Mundo', user: user}}>
        {children}
    </UserContext.Provider>
  )
}
