'use strict';

function get(req, res) {
  res.sendFile('index.html');
};

exports.get = get;
