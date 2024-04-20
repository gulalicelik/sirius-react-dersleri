function  UserFilterCard (props) {
    // eslint-disable-next-line react/prop-types
    const {name,email,profile_picture} = props;

  return (
   <>
    <div className="card">
        <img src={profile_picture} alt="profile" />
        <h3>{name}</h3>
        <p>{email}</p>
    </div>
   </>
  )
}

export default UserFilterCard;