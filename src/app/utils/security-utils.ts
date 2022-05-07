import { User } from "../interfaces/user";
import { ServerMockService } from "../services/server-mock.service";

export class SecurityUtil {
    
    constructor(private serverMockService: ServerMockService) { 
    }

    public static get(): User {
        const data = localStorage.getItem('user.logged');
        
        if (data) {
            return JSON.parse(data);
        } else {
            return null;
        }
    }
}