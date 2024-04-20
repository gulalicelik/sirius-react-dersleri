import './userCard.css';
import { AiOutlineUser } from "react-icons/ai";

function UserCard({user}) {

    return (
        <div className="user-card">
            <AiOutlineUser />
            <span>{user.name}</span> <br/><span>{user.username}</span>
            <p>{user.email}</p>
            <p>{user.phone}</p>
            <p>{user.website}</p>
            <p>{user.company.name}</p>
        </div>
    );
}

export default UserCard;