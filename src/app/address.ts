export interface Address {
    description?: string;
    addressLine1: string;
    addressLine2?: string;
    city: string;
    state: string;
    zipCode: string;
    addressId?: string; // unique id set in pinpoint
    placeId?: string; // unique id from google
    addressStatus?: 'GEOCODED' | 'PROVISIONED'; // status in Backend API
    latitude?: string;
    longitude?: string;
}
