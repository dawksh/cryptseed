<h1 align="center"> Cryptseed </h1>

**Description**:  Cryptseed is a open source tool aiming to help you save seed phrases inside your browser. I personally had become very skeptical so as how do I save my seed phrases. With increasing popularity of dApps and web 3.0, it is safe to assume that more products will be launched in the future which use this approach. Cryptseed encrypts your seed phrases and saves them inside your browser, at each decryption request, your identity is verified and then the phrases are decrypted.

  - **Technology stack**: This web app is built using ReactJS with NextJS as the framework.
  - [Live Demo](https://cryptseed.ml)


**Screenshot**:

![](https://ph-files.imgix.net/2bf8ee73-69df-45e7-9b49-35cd3e77bb7a.png?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=733&h=380&fit=max&dpr=1)


## Dependencies

Clone this repo 
```
git clone https://github.com/DevDaksh/cryptseed.git
```
After cloning, cd into it
```
cd cryptseed/
```
And at last use npm or yarn to install dependencies
```
npm install

or

yarn add
```

## Configuration
Goto [Google Firebase Console](https://console.firebase.google.com) and add a new project and copy it's contents and paste them in respective fields inside ```.env.example``` file inside root directory. After you're done, remove ```.example``` from the name and you're set!

## Usage
``npm run dev or yarn run dev`` to start the development server and start building!
