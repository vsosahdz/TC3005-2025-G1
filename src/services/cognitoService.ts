import AWS, {SecretsManager} from 'aws-sdk';
import crypto from 'node:crypto';
import { AWS_REGION,COGNITO_CLIENT_ID,COGNITO_SECRET_CLIENT }  from '../config';
import { ClientRequest } from 'node:http';

type CognitoAttributes = 'email';

class CognitoService {
    //Atributos
    private config: AWS.CognitoIdentityServiceProvider.Types.ClientConfiguration;
    private cognitoIdentity:AWS.CognitoIdentityServiceProvider;
    //Conectar con el backend
    private clientId:string=COGNITO_CLIENT_ID;
    private secretHash:string=COGNITO_SECRET_CLIENT;

    //Atributos de clase
    private static _instance:CognitoService;
    //Singleton
    public static get instance():CognitoService {
        return this._instance || (this._instance = new this());
    }

    public constructor() {
        this.config ={
            region: AWS_REGION
        };
        this.cognitoIdentity = new AWS.CognitoIdentityServiceProvider(this.config);
    }

    //Metodo para gestionar usuarios
    //Registro de usuario
    public async signUpUser(
        email:string,
        password:string,
        userAttributes:{
            Name:CognitoAttributes,Value:string}[]){
                const params = {
                    ClientId: this.clientId,
                    Password: password,
                    Username: email,
                    SecretHash:this.hashSecret(email),
                    UserAttributes: userAttributes
                }
                try{
                    return await this.cognitoIdentity.signUp(params).promise();
                }catch(error){
                    console.error('Error al registrar el usuario:', error);
                }
            }
    
    //Verificacion de usuario
    public async verifyUser(email:string, code:string){
        const params ={
            ClientId:this.clientId,
            ConfirmationCode:code,
            Username:email,
            SecretHash:this.hashSecret(email)
        }
        try{
            return await this.cognitoIdentity.confirmSignUp(params).promise();
        }catch(error){
            console.error('Error al verificar el usuario:', error);
        }
    }


    //Metodo auxiliar
    private hashSecret(username:string):string{
        return crypto
            .createHmac('SHA256', this.secretHash)
            .update(username+this.clientId)
            .digest('base64')
    }



}

