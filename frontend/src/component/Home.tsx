import { useEffect, useState } from "react"
import { useGetEnvironment } from "../config/hooks"

interface User {
    id: number,
    username: string,
    email: string,
    createdAt: Date,
    updatedAt: Date
}
const Home = () => {
    const [users, setUsers] = useState<User[]>([])
    const {host,port,protocol} = useGetEnvironment();
    useEffect(() => {
        async function fetchUsers(){
            try{
                const result = await fetch(`${protocol}://${host}:${port}/api/v1/users`).then(res=>res.json()).then(res => res.data)
                console.log(result)
                setUsers(result)
            }
            catch(e){
                console.error(e)
            }
        }
        fetchUsers()
    },[host, port, protocol])
  return (
    <>
    <div>Home</div>
    <table>
            <thead>

            <tr>
                <th>
                    Id
                </th>
                <th>
                    Username
                </th>
                <th>
                    Email
                </th>
                <th>
                    CreatedAt
                </th>
                <th>
                    UpdatedAt
                </th>
            </tr>
            </thead>
            <tbody>
    {
        users && users.length > 0 && users.map((user,index) => {
            return <tr key={index}>
                <td>{user.id}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>{`${user.createdAt}`}</td>
                <td>{`${user.updatedAt}`}</td>
            </tr>
        })
    }
    </tbody>
    </table>
    </>

  )
}

export default Home
