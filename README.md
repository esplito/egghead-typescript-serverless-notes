# Notes

This is from Jason Lengstorf's course [Create a TypeScript Powered Serverless React Application](https://egghead.io/courses/create-a-typescript-powered-serverless-react-application-cf0acfbf), but with my own notes.

Github repo: https://github.com/jlengstorf/egghead-serverless-typescript

When running `netlify dev` (shorthand: `ntl dev`) it will auto-detect that we have a vite-server running. It will also detect that we have netlify functions and will proceed with running that on another port. We can access it by navigating to:

```
http://localhost:8888/.netlify/functions/<name of function file>
```

The output returned from that function will be shown.

To test the serverless functions that take arguments we can do a post request using curl:

```
curl -X POST -d '{"name": "Test name", "favouriteColour": "purple"}' http://localhost:8888/.netlify/functions/submit
```

## Netlify Deploy (through Netlify CLI)

(I skipped this for now. I already have my own site on Netlify)

1. Run `ntl init`
2. Select `Create & configure new site`
3. Choose team
4. Type in the name of your site
5. Woho! 🥳 Site is now created.
6. Select build command to run (in this case `vite build`)
7. Select directory to deploy (`dist`)
8. Select Netlify Functions folder (`netlify/functions`)
9. Netlify CI/CD is now configured!!! 🚀

Run `ntl open` to open up the site dashboard in the browser.

Jason's example app is live at https://egghead-serverless-typescript.netlify.app/

### Side note

I saw that Jason had some kind of extension that shows the "import cost" of a package. Seemed like a neat thing to have so I installed it too. Looks like it is the extension "Import Cost".
