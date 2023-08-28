import React, { useState } from "react";
export const Register = (props) => {
    return (
        <div className="Reg">
            <h1>Register User</h1>
            <form>
                <input type="email" placeholder="Username" id="email" name="email" /><br/>
                <input type="password" placeholder="Password" id="password" name="password" /><br/>
                <input type="password" placeholder="Confirm Password" id="password" name="password" /><br/>
                <input type="email" placeholder="E-mail" id="email" name="email" /><br/>
                <input type="dob" placeholder="Dob" id="dob" name="dob" />
                <br/>
                <button type="submit">Register</button>
            </form>
        <button className="link-btn" onClick={() => props.onFormSwitch('login')}>Already have an account? Login here.</button>
    </div>
    )
}
