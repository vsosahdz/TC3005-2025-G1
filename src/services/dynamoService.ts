import { DynamoDB } from "@aws-sdk/client-dynamodb";
import { AWS_REGION,AWS_ACCESS_KEY_ID,AWS_SECRET_ACCESS_KEY,AWS_SESSION_TOKEN } from "../config";

//Inicializar el cliente de DynamoDB
const dynamodb = new DynamoDB({
    credentials: {
        accessKeyId: AWS_ACCESS_KEY_ID,
        secretAccessKey: AWS_SECRET_ACCESS_KEY,
        // Unicamente al utiliza AWS academy u otra ambiente de cloud con sesion
        sessionToken: AWS_SESSION_TOKEN,
    },
    region: AWS_REGION
});

export default dynamodb;