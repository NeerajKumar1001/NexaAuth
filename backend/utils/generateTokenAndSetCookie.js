import jwt from 'jsonwebtoken';

export const generateTokenAndSetCookie = (res, useId) => {
    const token = jwt.sign({ id: useId }, process.env.JWT_SECRET, {
        expiresIn: '7d', // Token will expire in 7 day
    })

    res.cookies('token', token, {
        httpOnly: true, 
        secure: process.env.NODE_ENV === 'production', 
        sameSite: 'Strict', 
        maxAge: 7 * 24 * 60 * 60 * 1000, 
    })
    
    return token;
 
}