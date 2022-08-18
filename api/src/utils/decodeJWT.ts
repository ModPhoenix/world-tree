import jwt from "jsonwebtoken";
import { NEO4J_GRAPHQL_JWT_SECRET } from "../settings";

export function decodeJWT(token: string): Promise<{ sub: string }> {
    return new Promise((resolve, reject) => {
        jwt.verify(token, NEO4J_GRAPHQL_JWT_SECRET, (err: jwt.VerifyErrors | null, decoded) => {
            if (err) {
                reject(err);
            }

            const { sub } = decoded as { sub: string };

            resolve({ sub });
        });
    });
}
