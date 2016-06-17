## Getting setup
You need, [Node 6](https://nodejs.org/en/).

 * [Download the installer](https://nodejs.org/en/) and follow the prompts.

Or use your favorite package manager to get it (e.g., [HomeBrew](http://brew.sh) on MacOS, [apt-get](https://en.wikipedia.org/wiki/Advanced_Packaging_Tool) on Linux). 


## Check your Node version!
This is how you check what version of Node you have:

```Bash
node --version
```

It should say something greater than or equal to `v6.0.0` (e.g., v6.2.1).


## Getting the tutorials

Clone the following repository and run npm install:

```Bash
git clone git@github.com:JSWorkshops/fundamentals.git
npm install
```

This will install Mocha + Chai (a testing framework), which we will use to complete the excercises.  

## Now what? 
In you favorite editor, open up each of the exercises. Try to solve each problem. We will go through them together in the tutorial. 


### Running tests

To run all the tests at once, run `npm test`.

Whilst completing the exercises, it may be more practical to watch single file at a time:

```bash
npm run test:dev file-to-test.js
# more memorable than:
# npm run mocha -- --watch file-to-test.js
```

It's also useful to know that you can limit the tests executed by adding the keyword `only` to `describe` and `it`:

```javascript
// only tests in this suite will run
describe.only('My Test Suite', function() {});

describe('My Test Suite', function() {
    // only the following test will run
    it.only('Should return true', function() {
      expect(true).to.be.true;
    });
});
```
