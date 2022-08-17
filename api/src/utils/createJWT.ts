import jwt from "jsonwebtoken";
import { NEO4J_GRAPHQL_JWT_SECRET } from "../settings";


export function createJWT(data: { sub: string }): Promise<string> {
    return new Promise((resolve, reject) => {
        jwt.sign(data, NEO4J_GRAPHQL_JWT_SECRET, (err: Error | null, encoded: string | undefined) => {
            if (err || !encoded) {
                return reject(err);
            }

            return resolve(encoded);
        });
    });
}