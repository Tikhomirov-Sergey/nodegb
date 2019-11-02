const jwt = require('jsonwebtoken');

const UserHelper = require('./models/User/user-helper');

const ACCESS_TOKEN_SECRET = 'ONLINE_GYM_ACCESS_SECRET';
const REFRESH_TOKEN_SECRET = 'ONLINE_GYM_REFRESH_SECRET.2019.10.18.20.33';

const ECPIRES_IN_ACCESS_TOKEN = 10000;
const ECPIRES_IN_REFRESH_TOKEN = 1000000;

const createAccessPayload = (user) => {

    const payload = {
        user: {
            id: user._id,
            username: 'Sergey',
        },
        token_type: 'access_token',
    }

    return payload; 
}

const createRefreshPayload = (user) => {

    const payload = {
        user: {
            id: user._id
        },
        token_type: 'refresh_token',
    }

    return payload;
}

const getAuthJson = (user) => {

    const accessPayload = createAccessPayload(user);
    const refreshPayload = createRefreshPayload(user);

    return {
        result: {
            token_type: "bearer",
            access_token: jwt.sign(accessPayload, ACCESS_TOKEN_SECRET),
            refresh_token: jwt.sign(refreshPayload, REFRESH_TOKEN_SECRET),
        }
    }
}

const initPassport = (app) => {

    app.post('/auth', async (req, res) => {

        const { username, password } = req.body;
        const { error, result } = await UserHelper.verifyUser(username, password);

        console.log(username, password, req.body)

        if(error) {
            res.json({error});
        }

        if(result) {
            res.json(getAuthJson(result));
        } else {
            res.json({error: 'Неверный логин или пароль'});
        }
    });

    app.post('/refresh-token', async (req, res) => {

        

    });
}

const verifyToken = (req, res, next) => {

    const authorization = req.headers['authorization'];

    console.log(authorization)

    if(!authorization) {
        return res.status(401).json({ error: 'Unauthecated' });
    }

    const [, token] = authorization.split(' ');

    jwt.verify(token, ACCESS_TOKEN_SECRET, { maxAge: '1h' }, (error, decoded) => {

        if(error) {
            return res.json({error: error});
        }

        req.user = decoded;

        next();

    });
}

module.exports = { initPassport, verifyToken };