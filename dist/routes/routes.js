"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = (server) => {
    server.route({
        method: 'POST',
        path: '/users',
        handler: () => { }
    });
    server.route({
        method: 'GET',
        path: '/users',
        handler: () => { }
    });
    server.route({
        method: 'GET',
        path: '/users/{id}',
        handler: () => { }
    });
    server.route({
        method: 'PUT',
        path: '/users/{id}',
        handler: () => { }
    });
    server.route({
        method: 'DELETE',
        path: '/users/{id}',
        handler: () => { }
    });
};
