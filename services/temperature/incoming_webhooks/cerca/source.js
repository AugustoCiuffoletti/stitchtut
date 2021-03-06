// This function is the webhook's request handler.
exports = function(payload, response) {
    const {n} = payload.query;

    console.log("n=", n);
    // console.log("Content-Type:", JSON.stringify(contentTypes));
    // console.log("Request body:", body);

    // You can use 'context' to interact with other Stitch features.
    // Accessing a value:
    // var x = context.values.get("value_name");

    // Querying a mongodb service:
    // const doc = context.services.get("mongodb-atlas").db("dbname").collection("coll_name").findOne();

    // Calling a function:
    // const result = context.functions.execute("function_name", arg1, arg2);

    // The return value of the function is sent as the response back to the client
    // when the "Respond with Result" setting is set.
    // return  "Hello World!";
    var collection = context.services.get("mongodb-atlas").db("Meteo").collection("Citta");
    var t = collection.findOne({nome: bbb}).then(
       (doc)=>{return doc.temperatura.toString()}
    );
    return t;
};
