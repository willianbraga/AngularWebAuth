export interface User {
    id?: string;
    email: string;
    password: string;
    credentials: Credential[];
}

export interface Credential {
    credentialId: Uint8Array;
    publicKey: Uint8Array;
}