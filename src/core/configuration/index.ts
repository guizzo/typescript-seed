declare interface MongoConfig {
  username: string;
  password: string;
  cluster: string;
  database: string;
  authMechanism: string;
}

export function MongoConfig (): MongoConfig {
  return {
    username: encodeURIComponent(process.env.MONGODB_USERNAME),
    password: encodeURIComponent(process.env.MONGODB_PASSWORD),
    cluster: process.env.MONGODB_CLUSTER,
    database: process.env.MONGODB_DATABASE,
    authMechanism: 'DEFAULT'
  };
}
