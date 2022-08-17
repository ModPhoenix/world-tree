import bcrypt from "bcrypt";

const saltRounds = 10;

export function hashPassword(password: string): Promise<string> {
    return new Promise((resolve, reject) => {
        bcrypt.hash(password, saltRounds, (err, hash) => {
            if (err) {
                reject(err);
            }

            resolve(hash);
        });
    });
}
