install:	npm install
brain-games:	node bin/brain-games.js
publish:	npm publish --dry-run
lint:	npx eslint src
even:	node src/bin/brain-even.js	

