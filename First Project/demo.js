const {MongoClient, ServerApiVersion} = require('mongodb');
const fs = require('fs');


 const main = async () => {
    const credentials = "cred/X509-cert-3748800743877044940.pem"
    const uri = "mongodb+srv://cluster-learn.syzyt4f.mongodb.net/?authSource=%24external&authMechanism=MONGODB-X509&retryWrites=true&w=majority"

    const client = new MongoClient(uri, {
        sslKey: credentials,
        sslCert: credentials,
        serverApi: ServerApiVersion.v1
      })

    try{
        await client.connect();
        await createListing(client, {
            name:"Lovely Loft",
            summary: "A charming loft in Paris",
            bedrooms: 1,
            bathrooms:1
        })
    } catch(error){
        console.error(error);
    } finally{
        await client.close();
    }

}

main().catch(console.error)


async function createListing(client, newListing) {
    const result = await client.db("sample_airbnb").collection("listingsAndReviews").insertOne(newListing);
    console.log(`New listing created with the following id ${result.insertedId}`);
}