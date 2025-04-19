# 👞 The Shoemaker Goes Barefoot

Welcome! 👋  
Trying ZenRows API, genuinely curious about this technology, I wanted to explore the product hands-on — and what better way than to try scraping its own API registration page?

## 🤖 What This Is

Using ZenRows API with AI Web Unblocker, by enabling [Premium Proxies](https://docs.zenrows.com/universal-scraper-api/features/proxy-ip) and [JS rendering](https://docs.zenrows.com/universal-scraper-api/features/js-rendering), I attempted to scrape its registration page — the one sitting behind a Cloudflare proxy. The goal wasn’t just to test for success or failure, but to better understand the edge cases and real-world behavior when used under tough conditions.

#### Spoiler alert:

**Even the best tools can struggle when turned inward.** 😅  
In this case, ZenRows own API appears to be unable to get past their own anti-bot defenses — and honestly, that makes perfect sense!

## Installation and Running

- clone the repo
- cd to the cloned directory
- create a `.env` file with your API Key

```
echo ZENROWS_API_KEY=[YOUR API KEY] > .env
```
- install dependencies and run the basic scraping script
```
npm install
npm run main --url=[URL TO SCRAPE]
```
*Example*
```
npm run main --url=https://app.zenrows.com/register
```

## 📌 Why I Did This

- To demonstrate that I care about what a product I am exploring.
- To show how I think about debugging and understanding systems from the outside in.
- To explore the practical boundaries of even the best scraping tools.
- And, maybe, to share a chuckle about the classic saying:  
  _“The shoemaker's children go barefoot.”_

## 🛠️ What's In Here (see Installation and Running above)

- A short script using ZenRows API to request the registration page.
- Parameters configured according to ZenRows documentation.
- Observations and logs that show the outcome.

## 💬 Final Thought

This isn’t meant as a “gotcha” — just a small, thoughtful test that reflects how much I enjoy digging into systems and thinking about product realities. If you're a ZenRows employee reading this, thanks for stopping by! I’d love to chat more about ways to improve, debug, and build around real-world product behavior like this.

Cheers,  
**Tal Yaniv**