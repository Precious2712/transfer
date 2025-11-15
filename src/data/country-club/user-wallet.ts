export interface User {
    _id: string;
    firstname: string;
    lastname: string;
    email: string;
    country: string;
    occupation: string;
    about: string;
    religion: string;
    maritalStatus: string;
    hobbies: {
        one: string;
        two: string;
        three: string;
    };
    wallet: number;
    createdAt: string;
    updatedAt: string;
}
