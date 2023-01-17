---
title: Auto-invest in Bitcoin with Relai and Butanuki
tags:
  - bitcoin
#category: technology
#excerpt: "Jekyll and Minimal Mistakes on GitHub Pages"
---

I tried both [Relai](https://relai.app){:target="_blank"} and [Butanuki](https://butanuki.com/){:target="_blank"}, two Swiss solutions that allow to auto-invest in Bitcoin. Both solutions can also be used by non-Swiss residents (please check their respective terms and conditions for more details).

<!--more-->

While Relai is a fairly well established Bitcoin-only company that allows more than auto-investing, Butanuki is not a company, but a tool provided by Swiss bitcoiner [Yves Bennaïm](https://bennaim.com){:target="_blank"}. Butanuki actually relies on [Bity](https://bity.com){:target="_blank"}, a pioneer in the field of crypto financial services based in Neuchâtel, Switzerland.

The first good thing about those two solutions is that they promote [self-custody](https://thebitcoinmanual.com/articles/why-bitcoiners-should-self-custody/){:target="_blank"} and even force you to do it: indeed, they will not keep your Bitcoin.

As expected, both solutions require [KYC](https://en.wikipedia.org/wiki/Know_your_customer){:target="_blank"}. Once this small admin step is done, both solutions are really easy to use:

1. setup a regular investing plan (e.g. 100.- Swiss francs per week)
2. create the corresponding recurrent payment in your traditional bank account (both Relai and Butanuki will provide you with the details of the Swiss bank accounts where you need to send the money)

## Real-life test

Last Monday, I had the exact same payment scheduled for both services: CHF 100.-.

First off, both worked as expected: I received my sats, no bad surprise.

Then, it was interesting to note that the Bitcoin transaction for Butanuki was executed a few hours earlier than the Relai one (not sharing them here for privacy/security reasons). It's not a big deal since the goal of auto-investing is precisely to not have to worry about catching the best possible price on a given day (although it is nice when it happens). In the long-run, this should not matter.

I got a few more sats with Butanuki, maybe because they did not apply the same conversion rate price themselves (since the transactions did not happen at the exact same time), but also because transaction fees where a bit lower:
* Relai: 1.5% (base fee is 2.5% but you can get a fee as low as 1% depending on the options you choose, details [here](https://support.relai.app/en/articles/5658120-how-much-do-i-pay-in-fees-for-buying-selling-bitcoin))
* Butanuki: 0.9% (normally 1.5%, but I could benefit from the [early bird discount](https://twitter.com/Butanuki21/status/1608108487632105474){:target="_blank"})

## What I like

What I like about Relai:
* Not only for auto-invest
* Nice mobile app
* They provide their own wallet, so easier to get started for beginners

What I like about Butanuki:
* Focuses on auto-investing only and even provides [a simulator](https://app.butanuki.com/savings){:target="_blank"} that shows why it might be a good idea to (auto-)invest in Bitcoin
* The fact that you can choose where the Bitcoin should be sent, no need for an extra transaction if you want to manage your keys with a hardware wallet for example

## Address reuse

Both solutions will reuse the same Bitcoin address for every payment. Address reuse should be avoided as explained [here](https://en.bitcoin.it/wiki/Address_reuse){:target="_blank"}. I wonder if this is something Relai or Butanuki are planning to improve.

Update 18.01.2023 regarding address reuse: both Relai and Butanuki told me that this is something they are planning to improve. Relai said they will fix this "once it's legally feasible" while Butanuki mentioned the "move to XPUB or BIP47 asap".
