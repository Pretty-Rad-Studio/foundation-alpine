Shopify starter theme with Tailwind CSS, Alpine.js and Shopify CLI - using [Shopify Theme Lab](https://github.com/uicrooks/shopify-theme-lab).

Everything from the [Shopify Theme Lab docs](https://uicrooks.github.io/shopify-theme-lab-docs) applies to this project, since it was built with Shopify Theme Lab.


### Install Homebrew 

Install [Homebrew](https://brew.sh/) if you do not already have it. Test this by entering `brew config` in your terminal and observe the results. 


### Clone this respository

```
git clone https://github.com/Pretty-Rad-Studio/aeneid-shopify.git

cd aeneid-shopify
```


### Install dependencies
```
brew tap shopify/shopify
brew install shopify-cli@2

npm install 
```


### Verify the installation

To verify that Shopify CLI is installed properly, run the following command:

```
shopify2 version
```

### Login to Shopify

```
shopify2 login --store=aeneid
```

You should see "Logged into store aeneid.myshopify.com"


### Start the development server

```
npm run start
```