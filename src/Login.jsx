import React, { useState } from "react";
export const Login = (props) => {
    return (
      <>  <div className="login">
            <h1>Login</h1>
            <button className="link-btn" onClick={() => props.onFormSwitch('register')}><b>Don't have an account?signup</b></button>
            <form>
                <input type="email" placeholder="Username" id="email" name="email" />
                <input type="password" placeholder="Password" id="password" name="password" /><br/>
                <button type="submit">Log In</button>
            </form>
        </div>
        <div className="img">
        <img src="https://th.bing.com/th/id/R.4c6c1e83b80fc9024da09e9cd57cc01e?rik=zMCVEZlzJcoflg&riu=http%3a%2f%2fwww.trendingtop5.com%2fwp-content%2fuploads%2f2016%2f12%2fTop-5-Online-Food-Ordering-Apps-in-India.jpg&ehk=JHR4jYUMs1HoSvrsL%2f0mkJLOLHIHMoh0Tfn9cdAEpXg%3d&risl=&pid=ImgRaw&r=0"width={550} height={600}/>
    </div>
    </>
    )
}
