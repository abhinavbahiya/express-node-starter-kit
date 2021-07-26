const AWS = require('aws-sdk');

class Disclaimer {
  constructor() {
    // Create Database connection
    this.docClient = new AWS.DynamoDB.DocumentClient();
    this.tableName = process.env.DISCLAIMER_DB;
  }

  async getData() {
    // this.docClient
  }
}

/*

const express = require('express');
const app = express();

const AWS = require('aws-sdk');

AWS.config.loadFromPath('./config.json');

AWS.config.update({
  region: "us-east-2"
})
const docClient = new AWS.DynamoDB.DocumentClient()

app.get('/ok', (req, res) => {
  var table = "database";

  var params = {
      TableName:table,
      Item:{
          "DatabaseId": 'x3',
          "CreatedAt": 'now',
          "GroupId": "15",
          "Disclaimer": "15's Discliamer"
      }
  };

  console.log("Adding a new item...");
  docClient.put(params, function(err, data) {
      if (err) {
          console.error("Unable to add item. Error JSON:", JSON.stringify(err, null, 2));
      } else {
          console.log("Added item:", JSON.stringify(data, null, 2));
      }
  });
  
  res.status(200).json({
    res: true
  });
})


app.get('/show', (req, res) => {
  var table = "database";
  var params = {
    TableName: table,
    Key:{
        "DatabaseId": "x2",
        "CreatedAt": "now"
    }
  };

  docClient.get(params, function(err, data) {
      if (err) {
          console.error("Unable to read item. Error JSON:", JSON.stringify(err, null, 2));
      } else {
          console.log("GetItem succeeded:", JSON.stringify(data, null, 2));
      }
  });
})


app.get('/update', (req, res) => {
  var table = "database";
  var params = {
    TableName:table,
    Key:{
      "DatabaseId": "x2",
      "CreatedAt": "now"
    },
    UpdateExpression: "set Disclaimer = :r",
    ExpressionAttributeValues:{
        ":r":"This is updated one"
    },
    ReturnValues:"UPDATED_NEW"
  };

  console.log("Updating the item...");
  docClient.update(params, function(err, data) {
      if (err) {
          console.error("Unable to update item. Error JSON:", JSON.stringify(err, null, 2));
      } else {
          console.log("UpdateItem succeeded:", JSON.stringify(data, null, 2));
      }
  });
});


app.get('/query', (req, res) => {
  var table = "database";
  var params = {
    TableName : table,
    IndexName: "SecGroupIndex",
    KeyConditionExpression: "GroupId = :x",
    ExpressionAttributeValues: {
        ":x": "12"
    }
  };

//   {
//     "TableName": "GameScores",
//     "IndexName": "GameTitleIndex",
//     "KeyConditionExpression": "GameTitle = :v_title",
//     "ExpressionAttributeValues": {
//         ":v_title": {"S": "Meteor Blasters"}
//     },
//     "ProjectionExpression": "UserId, TopScore",
//     "ScanIndexForward": false
// }

docClient.query(params, function(err, data) {
    if (err) {
        console.error("Unable to query. Error:", JSON.stringify(err, null, 2));
    } else {
        console.log("Query succeeded.");
        data.Items.forEach(function(item) {
            console.log(item);
        });
    }
});
});


app.listen(3000, () => {
  console.log('Hi there!');
});

*/