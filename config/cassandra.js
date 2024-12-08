const cassandra = require('cassandra-driver');
const path = require('path');

// Specify the path to the secure connect bundle
const secureConnectBundlePath = path.join(__dirname, 'config', 'secure-connect-smartserve.zip');  // Path to your secure connect bundle

// Hardcoded credentials for Astra DB
const clientID = 'tntLhLBiSTFZQYZGUFzynXtw';  // Replace with your actual Client ID
const clientSecret = 'TfrZ2YUKh0KnM3mlayJmQUMbRa9rE605jpbqa5ybb6jzvYO3DZ8YuTNWyY-LTm6WUhSHC_T_NNpgZFIREU1XHhqSBxrC67b.fhGf3gMAXxCAp0LEw3pickptiPIDI2C+';  // Replace with your actual Client Secret

// Create Cassandra client for Astra DB
const client = new cassandra.Client({
    cloud: {
        secureConnectBundle: secureConnectBundlePath,  // Path to your secure connect bundle
    },
    credentials: {
        username: clientID,  // Client ID for Astra DB
        password: clientSecret,  // Client Secret for Astra DB
    },
    keyspace: 'smartserve',  // The keyspace you are using in Astra DB
});

client.connect()
    .then(() => console.log('Connected to Astra DB'))
    .catch(err => console.error('Failed to connect to Astra DB:', err));

module.exports = client;
