import React from 'react';

const Footer = () => {
    return (
        <div className='container'>
            <p className='text-center my-3'> &copy; All Rights Reserved By Md.Atik Bhuiyan @{new Date().getFullYear()}</p>
        </div>
    );
};

export default Footer;