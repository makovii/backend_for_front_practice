import { ObjectId } from "mongoose";
export interface AuthMongo {
    readonly _id: ObjectId;
    readonly name: string;
    readonly email: string;
    readonly password: string;
}
