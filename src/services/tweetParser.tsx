import tweetParser from "tweet-parser";

const wordMap: any = {};
const tweetParse = (tweets: any) => {
  for (const text in tweets) {
    const result = tweetParser(tweets[text].text);
    for (const x of result) {
      if (x.type === "USER" || x.type === "HASH" || x.type === "LINK") {
        continue;
      } else {
        let str = x.content;
        str = str.trim();
        let split = str.split(" ");
        for (let i = 0; i < split.length; i++) {
          if (wordMap[split[i]] === undefined) {
            wordMap[split[i]] = 1;
          } else {
            wordMap[split[i]]++;
          }
        }
      }
    }
  }
  return wordMap;
};

export default tweetParse;
