import express from 'express';
import bodyParser from 'body-parser';
import {filterImageFromURL, deleteLocalFiles} from './util/util';

(async () => {

  // Init the Express application
  const app = express();

  // Set the network port
  const port = process.env.PORT || 8080;

  // Use the body parser middleware for post requests
  app.use(bodyParser.json());

  // @TODO1 IMPLEMENT A RESTFUL ENDPOINT
  // GET /filteredimage?image_url={{URL}}
  // endpoint to filter an image from a public url.
  // IT SHOULD
  //    1
  //    1. validate the image_url query
  //    2. call filterImageFromURL(image_url) to filter the image
  //    3. send the resulting file in the response
  //    4. deletes any files on the server on finish of the response
  // QUERY PARAMATERS
  //    image_url: URL of a publicly accessible image
  // RETURNS
  //   the filtered image file [!!TIP res.sendFile(filteredpath); might be useful]

function validateURL(pURL: string) {
  var regexQuery = "^(https?:\/\/)?(www\.)?([-a-z0-9]{1,63}\.)*?[a-z0-9][-a-z0-9]{0,61}[a-z0-9]\.[a-z]{2,6}(\/[-\w@\+\.~#\?&\/=%]*)?$";
  // console.log(regexQuery);
  // console.log(pURL);
  var url = new RegExp(regexQuery,"i");
  return url.test(pURL);
}

  app.get( "/filteredimage", async ( req : express.Request, res : express.Response ) => {

    // 1. validate the image_url query

    var image_url : string = req.query.image_url;
    var is_image_url_valid : Boolean = validateURL(image_url);

    if(is_image_url_valid){
      // 2. call filterImageFromURL(image_url) to filter the image
      try {
        var image_path : string = await filterImageFromURL(image_url);
        var options = {
          dotfiles: 'deny',
          headers: {
            'x-timestamp': Date.now(),
            'x-sent': true
          }
        };
        // 3. send the resulting file in the response
        res.sendFile(image_path, options, function (err) {
          if (err) {
            res.status(400).send('Image could not be accessed')
          } else {
            // 4. deletes any files on the server on finish of the response
            deleteLocalFiles([image_path]);
          }
        });
      } catch (error) {
        res.status(404).send('Image is invalid')
      }

    }
    else {
      res.status(404).send('URL for the image was not found')
    }
  });


  /**************************************************************************** */

  //! END @TODO1

  // Root Endpoint
  // Displays a simple message to the user
  app.get( "/", async ( req, res ) => {
    res.send("try GET /filteredimage?image_url={{}}")

  } );


  // Start the Server
  app.listen( port, () => {
      console.log( `server running http://localhost:${ port }` );
      console.log( `press CTRL+C to stop server` );
  } );
})();
