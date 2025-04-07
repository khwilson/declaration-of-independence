#!/usr/bin/env node

import { XMLParser } from "fast-xml-parser";

async function extractStory(url) {
  const response = await fetch(url);
  const content = await response.text();
  const parser = new XMLParser(
    {
      ignoreAttributes: false,
      attributeNamePrefix: "@_",
      allowBooleanAttributes: true,
      unpairedTags: ["meta"],
    }
  )
  const data = parser.parse(content);
  const output = { url };

  for (let tag of data.html.head.meta) {
    if (tag["@_property"] == "og:title") {
      output["title"] = tag["@_content"];
    } else if (tag["@_property"] == "og:image") {
      output["imageUrl"] = tag["@_content"];
    } else if (tag["@_property"] == "og:description") {
      output["summary"] = tag["@_content"];
    } else if (tag["@_property"] == "article:published_time") {
      output["date"] = tag["@_content"].slice(0, 10);
    }
  }
  return output;
}

const answer = await extractStory(process.argv[2]);
console.log(answer);
