function ProfileCard({ name , Age}){
    return(
        <div className="profile-card">
            <img src = "https://www.w3schools.com/w3images/avatar2.png" alt = "profile picture" className="profile-image"/>
            <h3>Name of the customer : {name}</h3>
            
            <p>Age of the customer : {Age}</p>
        </div>
    );
}

export default ProfileCard;