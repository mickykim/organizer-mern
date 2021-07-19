import jsonwebtoken from 'jsonwebtoken';
import * as fs from 'fs';
/**
 * Issues a JWT for the provided user
 * @param {*} user - The user object. It is required to set the sub value in the JWT payload to the id on MongoDB
 */
function issueJWT(user) {
    const PRIVATE_KEY = fs.readFileSync(
        '../config/rsa-key/private.pem',
        'utf-8'
    );
    const expiresIn = '1d';
    if (!user) {
        return {};
    }
    const payload = {
        sub: user._id,
        iat: Date.now(),
    };

    const signedToken = jsonwebtoken.sign(payload, PRIVATE_KEY, {
        expiresIn: expiresIn,
        algorithm: 'RS256',
    });

    return {
        token: 'Bearer' + signedToken,
        expires: expiresIn,
    };
}
