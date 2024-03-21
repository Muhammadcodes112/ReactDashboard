import React from "react";

function Login() {
    const
    return(
        <div>
            <form>
                <label>Email</label>
                <input type="email" id="email" />
                <br />

                <label>Password</label>
                <input type="password" id="password" />

                <input type="submit" value="Login" />
            </form>
        </div>
    )
}