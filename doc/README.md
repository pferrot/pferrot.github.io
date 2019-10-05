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
bundle update
```

## View gem versions
```
bundle exec github-pages versions
```

## Force rebuild
```
git commit -m 'rebuild pages' --allow-empty
git push origin master
```

See https://stackoverflow.com/a/24099328

# Multi-language
See https://github.com/mmistakes/minimal-mistakes/issues/1416 and https://www.sylvaindurand.org/making-jekyll-multilingual/


