const { Client } = require("@elastic/elasticsearch");

const esClient = new Client({ 
  node: "http://localhost:9200",
  auth: {
    username: process.env.ELASTICSEARCH_PASSWORD,
    password: process.env.ELASTICSEARCH_USERNAME
  }
});

const indexName = "emails";


async function fetchAllEmailsFromES() {
    try {
      let result=[];
      const response = await esClient.search({
        index: indexName,
        size: 50, // Fetch up to 10 emails
        query: { match_all: {} } // Fetch all emails
      });
  
      if (response.hits.hits.length === 0) {
        console.log(" No emails are present in Elasticsearch.");
        return result;
      } else {
        return response.hits.hits;
      }
    } catch (error) {
      console.error("Error while fetching emails:", error);
    }
  }
  
  module.exports= {fetchAllEmailsFromES};