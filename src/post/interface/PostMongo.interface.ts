import { ObjectId } from "mongoose";

export interface PostMongo {
  readonly _id: string,
  readonly title: string;
  readonly body: string;
  readonly userId: string;
}
