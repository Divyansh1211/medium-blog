"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.blogContent = exports.signInInput = exports.signUpInput = void 0;
const zod_1 = require("zod");
exports.signUpInput = zod_1.z.object({
    email: zod_1.z.string().email(),
    password: zod_1.z.string().min(8),
    name: zod_1.z.string().optional(),
});
exports.signInInput = zod_1.z.object({
    email: zod_1.z.string().email(),
    password: zod_1.z.string().min(8),
});
exports.blogContent = zod_1.z.object({
    title: zod_1.z.string(),
    content: zod_1.z.string(),
});
