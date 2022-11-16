![logo](https://user-images.githubusercontent.com/44912347/202273653-1c259f67-7b01-46fc-8e4d-ccb804649e27.jpg)

# Coin Collector
**GOAL**: This is a node package that reads from one module of "coins" and collects them in another module. Use the project to practice essential Node skills of `npm`, `module.exports`, and `require`.

## Directions
Use the sections below to guide your work

### Initialize the package
1. Go to your terminal and run `pwd` to make sure you’re in the project directory (should end with `coin-collector`).  
2. If you are not in the `coin-collector` project directory, `cd` into this folder.
3. In the terminal, to initialize a brand-new package, run `npm init -y`. 
    - If you’re curious, leave off the `-y` and walk through the prompts!

### Install Jest
Until now, we’ve used tests in CodingRooms, but not locally. In this project, we’re running tests locally! However, in order to do so, we need to use a package, jest. We’ll learn more about jest in the next module, but for now, let’s install it!

1. Run the following npm command in your terminal.
```bash
npm install jest
```

2. Notice, there is now an entry in the `package.json`:
```json
"dependencies": {
  "jest": "27.5.1"
}
```
This means we have installed jest at version 27.5.1.

3. Notice, there is now a new jest directory in the `node_modules` folder. There is also a host of other directories there because jest depends on them too!

### Test Script
1. In the `package.json`, there is a `test` entry in the `scripts` object:
```json
"scripts": {
  "test": "echo \"Error: no test specified\" && exit 1"
},
```
2. We want this to instead run jest. Change the “test” line to run jest in `watch` mode, so the tests re-run anytime code is changed! Your `package.json` should now look like this for scripts.
```json
"scripts": {
  "test": "jest --watch-all"
},
```
3. Test your test script by running `npm test`. You should see some error output. That’s where your code comes in!

### `export` & `require`

This is where you write code. There are three different your code comments.  
1. In `coins.js`:
    - Export the coins array at the bottom starting on line 16.
2. In `collector.js`:
    - On line 1, require the coins array from coins.js.
    - On line 26, export the coinCollector function.
3. Run `npm test`. If everything is done correctly, you should see 5 passed tests!

### Commit & Push
1. Once all the test have been passed: `git add .`, `git commit -m “complete”`, and `git push` your changes.
