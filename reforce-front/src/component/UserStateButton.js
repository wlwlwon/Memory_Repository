import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const UserStateButton = () => {

    return (
        <div>

            <Link
                to={`${process.env.PUBLIC_URL}/login`}
            // onClick={this.scrollTop}
            >
                Login
            </Link>
            &nbsp;&nbsp;&nbsp;
            <Link
                className="btn btn-secondary"
                to={`${process.env.PUBLIC_URL}/register`}
            //   onClick={this.scrollTop}
            >
                Register
            </Link>

        </div>
    );
};
export default UserStateButton;