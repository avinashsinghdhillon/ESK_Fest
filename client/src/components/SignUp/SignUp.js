import React from 'react';
import './SignUp.css';

function SignUp(props) {
    return (
        <div className="signup">
            <div>
                <label for="fname">First Name</label>
                <input type="text" id="fname" name="fname"/>
                <label for="lname">Last Name</label>
                <input type="text" id="lname" name="lname"/>
                <label for="email">E-Mail</label>
                <input type="text" id="email" name="email"/>
                <label for="password">Password</label>
                <input type="password" id="password" name="password" placeholder="Must include a capital letter, number, and at least 6 characters"/>
            </div>
            <div className="submit">
                <input type="submit" value="Submit"/>
            </div>
        </div>
    )
}

export default SignUp;