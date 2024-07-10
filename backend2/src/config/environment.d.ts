declare global {
   namespace NodeJS {
      interface ProcessEnv {
         API_TOKEN: string,
         DATABASE_URL: string,
         PORT: number
      }
   }
}
export {}
