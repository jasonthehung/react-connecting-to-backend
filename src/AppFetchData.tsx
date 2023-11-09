import "bootstrap/dist/css/bootstrap.css"
import UserService, { User } from "./services/user-service"
import useUser from "./hooks/useUser"
import ProductForm from "./components/ProductForm"
import "@fontsource/roboto/300.css"
import "@fontsource/roboto/400.css"
import "@fontsource/roboto/500.css"
import "@fontsource/roboto/700.css"

const AppFetchData = () => {
    // Custom hook
    const { users, errorMsg, isLoading, setUsers, setErrorMsg } = useUser()

    const deleteUser = (user: User) => {
        const originalUsers = [...users]
        setUsers(users.filter((u) => u.id !== user.id))

        UserService.delete(user.id).catch((err) => {
            setErrorMsg(err.message)
            setUsers(originalUsers)
        })
    }

    const addUser = async () => {
        const originalUsers = [...users]
        const newUser = {
            id: 0,
            name: "Jason",
        }

        setUsers([...users, newUser])

        UserService.create(newUser)
            .then(({ data: savedUser }) => setUsers([savedUser, ...users]))
            .catch((err) => {
                setErrorMsg(err.message)
                setUsers(originalUsers)
            })
    }

    const updateUser = (user: User) => {
        const originalUsers = [...users]
        const updatedUser = { ...user, name: user.name + " Updated" }

        setUsers(users.map((u) => (u.id === user.id ? updatedUser : u)))

        UserService.update<User>(updatedUser)
            .then(({ data: savedUser }) => {
                setUsers(
                    users.map((u) => (u.id === savedUser.id ? savedUser : u))
                )
            })
            .catch((err) => {
                setErrorMsg(err.message)
                setUsers(originalUsers)
            })
    }

    return (
        <>
            {errorMsg && <p>{errorMsg}</p>}
            {isLoading && <div className="spinner-border"></div>}
            <ProductForm />
            <button className="btn btn-primary mb-3" onClick={() => addUser()}>
                Add
            </button>
            <ul className="list-group">
                {users.map((user) => (
                    <li
                        key={user.id}
                        className="list-group-item d-flex justify-content-between"
                    >
                        {user.name}
                        <div>
                            <button
                                className="btn btn-outline-danger mx-2"
                                onClick={() => deleteUser(user)}
                            >
                                Delete
                            </button>
                            <button
                                className="btn btn-outline-secondary"
                                onClick={() => updateUser(user)}
                            >
                                Update
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
        </>
    )
}

export default AppFetchData
