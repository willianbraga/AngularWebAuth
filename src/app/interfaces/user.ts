export interface User {
    id?: string;
    email: string;
    password: string;
    roles?: string[];
    token?: string,
    credentials: Credential[];
}

export interface Credential {
    credentialId: Uint8Array;
    publicKey: Uint8Array;
}