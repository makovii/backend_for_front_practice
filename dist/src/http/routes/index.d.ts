import RouterAuth from "../../auth/router";
export declare class Routes {
    private readonly routerAuth;
    constructor(routerAuth: RouterAuth);
    routes: () => import("express-serve-static-core").Router;
}
