import React from 'react';
//this is a function component`
const formatName = (user) =>{
    return `Hi ${user.firstName} ${user.lastName}`;
}
const user = {
    firstName:"Nelson",
    lastName: "S."
}

const About = () => {
        return(
            <div>
                <h1>About function component</h1>
                <p>Welcome {formatName(user)}</p>
            </div>
        )
}
export default About;