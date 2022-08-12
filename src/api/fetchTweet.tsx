import axios from "axios";
import tweetParse from "../services/tweetParser";

type TweetProps = {
  tweetId: number;
  limit: number;
};

const fetchTweet = async (props: TweetProps) => {
  const tweets = await axios.get(
    `https://floating-everglades-07636.herokuapp.com/api?id=${props.tweetId}&count=${props.limit}`
  );
  const data = await tweetParse(tweets.data);
  return data;
};

export default fetchTweet;
