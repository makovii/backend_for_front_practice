import 'dotenv/config';
export declare class JwtService {
    constructor();
    sign: (payload: any) => any;
    verify: (token: string) => any;
}
