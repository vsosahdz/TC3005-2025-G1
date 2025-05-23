export const PORT:number = process.env.PORT ? parseInt(process.env.PORT) : 8080;
export const NODE_ENV:string = process.env.NODE_ENV || 'development';
export const PREFIX_NAME = NODE_ENV === 'production' ? '' : '-DEV';
export const DB_NAME:string = process.env.DB_NAME || 'prueba';
export const DB_USER:string = process.env.DB_USER || 'root';
export const DB_PASSWORD:string = process.env.DB_PASSWORD || 'password';
export const DB_HOST:string = process.env.DB_HOST || 'localhost';
export const AWS_REGION:string = process.env.AWS_REGION || 'us-east-1';
export const AWS_ACCESS_KEY_ID:string = process.env.AWS_ACCESS_KEY_ID || '';
export const AWS_SECRET_ACCESS_KEY:string = process.env.AWS_SECRET_ACCESS_KEY || '';
export const AWS_SESSION_TOKEN:string = process.env.AWS_SESSION_TOKEN || '';
export const COGNITO_POOL_ID:string = process.env.COGNITO_POOL_ID || '';
export const COGNITO_CLIENT_ID:string = process.env.COGNITO_CLIENT_ID || '';
export const COGNITO_SECRET_CLIENT:string = process.env.COGNITO_SECRET_CLIENT || '';