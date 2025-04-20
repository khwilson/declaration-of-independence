#!/usr/bin/env node

import * as cheerio from "cheerio";

async function extractStory(url) {
  const response = await fetch(url, {
    "headers": {
      "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
      "accept-language": "en-US,en;q=0.9",
      "cache-control": "no-cache",
      "pragma": "no-cache",
      "priority": "u=0, i",
      "sec-ch-ua": "\"Chromium\";v=\"134\", \"Not:A-Brand\";v=\"24\", \"Google Chrome\";v=\"134\"",
      "sec-ch-ua-mobile": "?0",
      "sec-ch-ua-platform": "\"macOS\"",
      "sec-fetch-dest": "document",
      "sec-fetch-mode": "navigate",
      "sec-fetch-site": "same-origin",
      "sec-fetch-user": "?1",
      "upgrade-insecure-requests": "1",
      "Referer": "https://www.google.com/",
      "Referrer-Policy": "strict-origin-when-cross-origin",
      "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36",
    },
    "body": null,
    "method": "GET"
  });
  const content = await response.text();
  const data = cheerio.load(content);
  const output = { url };
  data('meta').each(
    (idx, taga) => {
      const tag = data(taga);
      if (tag.attr("property") == "og:title") {
        output["title"] = tag.attr("content");
      } else if (tag.attr("property")== "og:image") {
        output["imageUrl"] = tag.attr("content");
      } else if (tag.attr("property") == "og:description") {
        output["summary"] = tag.attr("content");
      } else if (tag.attr("property") == "article:published_time") {
        output["date"] = tag.attr("content").slice(0, 10);
      }
    }
  );

  return output;
}

const answer = await extractStory(process.argv[2]);
console.log(answer);
