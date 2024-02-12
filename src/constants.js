const API_KEY = "AIzaSyDqCsBSs5Z4jdYcKuneZy1MNNbil1TwsX8";

export const YOUTUBE_VIDEOS_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=IN&maxResults=50&key=" +
  API_KEY;

export const YOUTUBE_SUGGESTIONS_API =
  "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

export const YOUTUBE_SEARCH_API = (search_query) => {
  return (
    `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${search_query}&type=video&key=` +
    API_KEY
  );
};

export const comments = [
  {
    name: "Bhavya Jain",
    comment: "Great Demo of the App",
    replies: [
      {
        name: "Kumar Ranjan Pandey",
        comment: "Contrary to popular belief, Lorem Ipsum is not simply ",
        replies: [
          {
            name: "Dhanesh Shetty",
            comment: "Contrary to popular belief, Lorem Ipsum is not simply ",
            replies: [
              {
                name: "Bhavya Jain",
                comment: "Great Demo of the App",
                replies: [],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "Bhavya Jain",
    comment: "Great Demo of the App",
    replies: [
      {
        name: "Bhavya Jain",
        comment: "lorem ipsum dolo sit amet, consectetur adip",
        replies: [],
      },
      {
        name: "Bhavya Jain",
        comment: "lorem ipsum dolo sit amet, consectetur adip",
        replies: [
          {
            name: "Bhavya Jain",
            comment: "lorem ipsum dolo sit amet, consectetur adip",
            replies: [],
          },
          {
            name: "Bhavya Jain",
            comment: "lorem ipsum dolo sit amet, consectetur adip",
            replies: [
              {
                name: "Bhavya Jain",
                comment: "lorem ipsum dolo sit amet, consectetur adip",
                replies: [
                  {
                    name: "Bhavya Jain",
                    comment: "lorem ipsum dolo sit amet, consectetur adip",
                    replies: [
                      {
                        name: "Bhavya Jain",
                        comment: "lorem ipsum dolo sit amet, consectetur adip",
                        replies: [],
                      },
                      {
                        name: "Bhavya Jain",
                        comment: "lorem ipsum dolo sit amet, consectetur adip",
                        replies: [
                          {
                            name: "Bhavya Jain",
                            comment:
                              "lorem ipsum dolo sit amet, consectetur adip",
                            replies: [],
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        name: "Bhavya Jain",
        comment: "lorem ipsum dolo sit amet, consectetur adip",
        replies: [],
      },
      {
        name: "Bhavya Jain",
        comment: "lorem ipsum dolo sit amet, consectetur adip",
        replies: [],
      },
      {
        name: "Bhavya Jain",
        comment: "lorem ipsum dolo sit amet, consectetur adip",
        replies: [],
      },
      {
        name: "Bhavya Jain",
        comment: "lorem ipsum dolo sit amet, consectetur adip",
        replies: [],
      },
      {
        name: "Bhavya Jain",
        comment: "lorem ipsum dolo sit amet, consectetur adip",
        replies: [],
      },
    ],
  },
];
