# Development

## Run locally
```
bundle exec jekyll serve
```

## Install from scratch
```
\curl -sSL https://get.rvm.io | bash -s stable
rvm install 2.5.3
gem install bundler
bundle install
bundle exec jekyll serve
```

## Update gem versions
```
bundle update github-pages
```

See https://help.github.com/en/articles/setting-up-your-github-pages-site-locally-with-jekyll#keeping-your-site-up-to-date-with-the-github-pages-gem

## View gem versions
```
bundle exec github-pages versions
```
