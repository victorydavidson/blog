import "./settings.css";
import Sidebar from "../../sidebar/Sidebar"

export default function Settings() {
    return (
        <div className="settings">
            <div className="settingsWrapper">
                <div className="settingsTitle">
                    <span className="settingsUpdateTitle">Update Your Account</span>
                    <span className="settingsDeleteTitle">Delete Account</span>
                </div>
                <form className="settingsForm">
                    <label>Profile Picture</label>
                    <div className="settingsPP">
                        <img src="https://static.displate.com/280x392/displate/2023-03-03/afdfcd5380d9f8e90b5b9b579229a122_999f277e8239a1a3962b6cc8a2bdfb68.jpg" alt="" />
                        <label htmlFor="fileInput">
                           <i className="settingsPPIcon fa-regular fa-user"></i>
                        </label>
                        <input type="file" id="fileInput" style= {{display:"none"}} />
                    </div>
                    <label>Username</label>
                    <input type="text" placeholder="Davidson" />
                    <label>Email</label>
                    <input type="email" placeholder="davidson@gmail.com" />
                    <label>password</label>
                    <input type="Password" />
                    <button className="settingsSubmit">Update</button>
                </form>
            </div>
            <Sidebar />
        </div>
    )
}
