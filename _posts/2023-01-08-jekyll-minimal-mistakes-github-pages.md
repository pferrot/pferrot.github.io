---
title: Jekyll and Minimal Mistakes on GitHub Pages
tags:
  - jekyll
  - minimal mistakes
  - github pages
#category: technology
#excerpt: "Jekyll and Minimal Mistakes on GitHub Pages"
---

I first started playing with [Jekyll](https://jekyllrb.com/){:target="_blank"} and [Minimal Mistakes](https://mmistakes.github.io/minimal-mistakes/){:target="_blank"} something like four or five years ago when I wanted to setup a simple website for my work as a freelance software engineer.

I was looking for a cheap (free if possible) solution that was easy to maintain. Also, I wanted a good looking UI out of the box as I am pretty comfortable with backend stuff, but I am certainly no UX designer.

<!--more-->

While looking around at what others were using, I found that [Jonas Bonér's personal website](http://jonasboner.com){:target="_blank"}<sup>[1]</sup> was really cool. That's how I discovered [Jekyll](https://jekyllrb.com){:target="_blank"} and [Minimal Mistakes](https://mmistakes.github.io/minimal-mistakes/){:target="_blank"}. Jonas mentioned them in [his "about" page](http://jonasboner.com/about/){:target="_blank"} and also mentioned the fact that it is hosted on [GitHub Pages](https://pages.github.com/){:target="_blank"}. Exactly what I needed, so that's how I ended up using this solution for my personal website [https://pf80.ch](https://pf80.ch){:target="_blank"}.

I am not going to explain in details how to setup Jekyll with GitHub pages as there is extensive documentation about this already (the [official documentation](https://jekyllrb.com/docs/github-pages){:target="_blank"} to start with), but I am just going to recommend you to consider this solution if you are:

* comfortable working with Git / GitHub
* comfortable writing posts in [Markdown](https://en.wikipedia.org/wiki/Markdown){:target="_blank"} format
* capable of setting up some DNS records at your domain name registrar in case you want to access your website with a custom domain name like pf80.ch

Right, it's not a given for everyone. But if you can do this and you are not after highly sophisiticated editing and publishing capabilities, then you will most likely be very happy with the Jekyll + Minimal Mistakes + GitHub Pages combo. Some of the nice features this provides:

* Responsive layout
* 100% free (although you should consider sponsoring [Jekyll](https://opencollective.com/jekyll){:target="_blank"} or [Minimal Mistakes](https://github.com/sponsors/mmistakes){:target="_blank"})
* Native support for blog posts and standard pages
* Taxonomy (tags, categories)
* Highly customizable
* Support for comments through third-party comment providers (e.g. Disqus, Discourse,...)
* Site-wide search so visitors can easily find content in your website

The only thing that was not ideal for me was when I wanted to publish my website in multiple languages a few years ago. I eventually managed to do what I wanted with a few hacks, but this was not supported natively at the time. Maybe it is today, or some plugin exist, but if you need to localize your website, I recommend you double-check that first.

I am back to English only now, so everything's fine!

---

<sup>[1]</sup> Jonas Bonér is a distributed systems thought leader who greatly inspired me. He is notably know as the creator of the Akka reactive distributed systems platform. Maybe more on this another time.

