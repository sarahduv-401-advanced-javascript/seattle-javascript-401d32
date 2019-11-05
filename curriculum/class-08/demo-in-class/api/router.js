'use strict';

// this will be a different version of express than the server.js file
const express = require('express');
const router = express.Router();



// always use a / in the path
// you can defined variables in your path, such as '/posts/:postId'
router.get('/posts/:postId/:banana', (request, response) => {
  // const postId = request.params.postId;
  // the above is the same as below
  const { postId, banana } = request.params;
  response.send(`you have requested ${postId} and your banana is ${banana}`);
});

router.get('/posts', (request, response)) {
  // console.log(request.query);
  const { postId } = request.query;
  response.send(`your search query is ${postId}`);
})

module.exports = router;