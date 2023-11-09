import { useEffect, useState } from "react"
import { User } from "../services/user-service"
import UserService from "../services/user-service"

const useUser = () => {
    const [users, setUsers] = useState<User[]>([])
    const [errorMsg, setErrorMsg] = useState("")
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        setIsLoading(true)
        UserService.getAll<User>()
            .then((res) => setUsers(res.data))
            .catch((err) => setErrorMsg(err.message))
            .finally(() => setIsLoading(false))
    }, [])

    return { users, errorMsg, isLoading, setUsers, setErrorMsg, setIsLoading }
}

export default useUser
