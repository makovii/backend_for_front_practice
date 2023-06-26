export const CONTAINER_TYPES = {
    Server: Symbol.for('Server'),

    // Route
    Routes: Symbol.for('Routes'),
    RouterAuth: Symbol.for('RouterAuth'),
    RouterPost: Symbol.for('RouterPost'),

    // Controller
    AuthController: Symbol.for('AuthController'),
    PostController: Symbol.for('PostController'),

    // Entity
    AuthEntity: Symbol.for('AuthEntity'),
    PostEntity: Symbol.for('PostEntity'),

    // Mappers
    PostMapper: Symbol.for('PostMapper'),
}
