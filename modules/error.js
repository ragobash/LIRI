function error(err) {
    if (error.response) {
        console.log("---------------Data---------------");
        console.log(err.response.data);
        console.log("---------------Status---------------");
        console.log(err.response.status);
        console.log("---------------Status---------------");
        console.log(err.response.headers);
      } else if (err.request) {
       
        console.log(err.request);
      } else {

        console.log("Error", err.message);
      }
      console.log(err.config);
}

module.exports = error;