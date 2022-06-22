import { useContext } from "react"
import { UserContext } from "../contexts/User";
import ProfilePicture from "./ProfilePicture";

export default () => {

    const { state: { name } } = useContext(UserContext);
    console.log("Updating user detail");

    return (
        <div>
            <h1>{name}</h1>
            <ProfilePicture />
        </div>
    )
}