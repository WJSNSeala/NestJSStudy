export interface NestEnvVariables {
  PORT: number;
  MONGO_URI: string;
}

export default () => ({
  port: parseInt(process.env.PORT, 10) || 3000,
  mongoUri: process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/nestjs-study',
});
