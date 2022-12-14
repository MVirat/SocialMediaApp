import "./topbar.css"
import {Search,Person,Chat,Notifications} from "@material-ui/icons"
import { Link } from "react-router-dom";
import { useContext } from "react";
import {AuthContext} from "../../context/AuthContext"


const Topbar = () => {
    const{user} = useContext(AuthContext)
    const PF = process.env.REACT_APP_PUBLIC_FOLDER
    
    return ( 
        <div className="topbarContainer">
            <div className="topbarLeft">
                <Link to="/" style = {{textDecoration:"none"}}>
                    <span className="logo">SocialMedia</span>
                </Link>
                
            </div>
            <div className="topbarCenter">
                <div className="searchbar">
                    <Search className="searchIcon"/>
                    <input placeholder="Search For freind , post or video" className="searchInput"/> 
                </div>
            </div>
            <div className="topbarRight">
                <div className="topbatLinks">
                    <span className="topbarLink">Homepage</span>
                    <span className="topbarLink">Timeline</span>
                </div>
                <div className="topbarIcons">
                    <div className="topbarIconItem">
                        <Person/>
                        <span className="topbarIconBadge">3</span>
                    </div>
                    <div className="topbarIconItem">
                        <Chat/>
                        <span className="topbarIconBadge">6</span>
                    </div>
                    <div className="topbarIconItem">
                        <Notifications/>
                        <span className="topbarIconBadge">9</span>
                    </div>
                </div>
                <Link to ={`/profile/${user.username}`}>
                    <img src={user.profilePicture ? PF+user.profilePicture : PF+"person/noAvatar.png"} alt="" className="topbarImg" />
                </Link>
            </div>
          
        </div>
     );
}
 
export default Topbar;
