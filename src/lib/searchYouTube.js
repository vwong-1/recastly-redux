/**
 * GET request
 * Purpose: call youtube API to receive back an object consisting of the array of videos
 * Questions:
 *  Why is this not using ajax this time?
 *  Using promises this time?
 */
var searchYouTube = ({ key, query, max = 5 }, callback) => {
  $.get('https://www.googleapis.com/youtube/v3/search', {
    part: 'snippet',
    key: key,
    q: query,
    maxResults: max,
    type: 'video',
    videoEmbeddable: 'true'
  })
    .done(({ items }) => {
      if (callback) {
        callback(items);
      }
    })
    .fail((data) => {
      // responseJSON.error.errors.forEach((err) =>
      //   console.error(err)
      // );
      console.log(data);
    });
  };

  export default searchYouTube;

  // $.ajax({
  //   // This is the url you should use to communicate with the parse API server.
  //   url: 'https://www.googleapis.com/youtube/v3/search',
  //   type: 'GET',
  //   data: {
  //     q: query,
  //     maxResults: max,
  //     videoEmbeddable: true,
  //     key: key,
  //     part: "snippet",
  //     type: 'video'
  //   },
  //   success: function (data) {
  //     callback(data.items);
  //   },
  //   error: function (data) {
  //     // See: https://developer.mozilla.org/en-US/docs/Web/API/console.error
  //     console.error('Failed to get data from youtube', data);
  //   }
  // });