import * as jwt from "jsonwebtoken";
import * as env from 'env-var';
import 'dotenv/config';

export class JwtService {
  constructor() {}

  sign = (payload) => {
    return jwt.sign(payload,
    env.get("SECRET_JWT").required().asString(),
    { expiresIn:  env.get("EXPRESS_IN").required().asString() }
    );
  }

  verify = (token: string) => {
    return jwt.verify(token, env.get("SECRET_JWT").required().asString());
  }

}
