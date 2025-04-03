export const PORT:number = process.env.PORT ? parseInt(process.env.PORT) : 8080;
export const NODE_ENV:string = process.env.NODE_ENV || 'development';
export const PREFIX_NAME = NODE_ENV === 'production' ? '' : '-DEV';