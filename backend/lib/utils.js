import jsonwebtoken from 'jsonwebtoken';
import * as fs from 'fs';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';

/**
 * Issues a JWT for the provided user
 * @param {*} user - The user object. It is required to set the sub value in the JWT payload to the id on MongoDB
 */
function issueJWT(user) {
    if (!user) return {};

    const __dirname = dirname(fileURLToPath(import.meta.url));
    const pathToPrivateKey = path.join(
        __dirname,
        '../config/rsa-key/private.pem'
    );

    const PRIVATE_KEY = fs.readFileSync(pathToPrivateKey, 'utf-8');
    const expiresIn = '10s';

    const payload = {
        sub: user._id,
        iat: Math.floor(Date.now() / 1000), // iat takes time as seconds since the Epoch
    };

    const signedToken = jsonwebtoken.sign(payload, PRIVATE_KEY, {
        expiresIn: expiresIn,
        algorithm: 'RS256',
    });

    return {
        token: `Bearer ${signedToken}`,
        expiresIn: expiresIn,
    };
}

export { issueJWT };
