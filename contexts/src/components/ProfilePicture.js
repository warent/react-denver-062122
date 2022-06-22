import { useContext } from "react"
import { UserContext } from "../contexts/User";

export default () => {
    const { state: { loading, profilePicture }, actions: { setLoading } } = useContext(UserContext);

    console.log("Updating profile picture");

    return (
        <>
            {
                loading && <div style={{ fontWeight: 600, height: 200 }}>Loading...</div>
            }
            <img onLoad={() => setLoading(false)} src={profilePicture} style={{ display: loading ? "none" : "inline" }} />
        </>
    )
}