import mongoose from 'mongoose';
declare const userSchema: mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    name?: string;
    email?: string;
    password?: string;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    name?: string;
    email?: string;
    password?: string;
}>> & Omit<mongoose.FlatRecord<{
    name?: string;
    email?: string;
    password?: string;
}> & {
    _id: mongoose.Types.ObjectId;
}, never>>;
export { userSchema };
export declare const Auth: mongoose.Model<{
    name?: string;
    email?: string;
    password?: string;
}, {}, {}, {}, mongoose.Document<unknown, {}, {
    name?: string;
    email?: string;
    password?: string;
}> & Omit<{
    name?: string;
    email?: string;
    password?: string;
} & {
    _id: mongoose.Types.ObjectId;
}, never>, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    name?: string;
    email?: string;
    password?: string;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    name?: string;
    email?: string;
    password?: string;
}>> & Omit<mongoose.FlatRecord<{
    name?: string;
    email?: string;
    password?: string;
}> & {
    _id: mongoose.Types.ObjectId;
}, never>>>;
