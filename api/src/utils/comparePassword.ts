import bcrypt from "bcrypt";

export function comparePassword(password: string, hash: string): Promise<boolean> {
    return new Promise((resolve, reject) => {
        bcrypt.compare(password, hash, (error: Error | undefined, same: boolean) => {
            if (error) {
                return reject(error);
            }

            return resolve(same);
        });
    });
}
