# vf2

vue&firebase 2

# install

## firebase use

```bash
$ firebase login # If you are not logged in
$ firebase use --add
? Which project do you want to add? xxx-site
? What alias do you want to use for this project? (e.g. staging) default

Created alias default for xxx-site.
Now using alias default (xxx-site)
```

## functions

### key download

functions/key.json download from console service account key

### setting

```bash
$ firebase functions:config:set admin.email=jukman81@gmail.com admin.db_url=https://baejm-vuef-default-rtdb.com admin.region=asia-northeast1 admin.bucket_url=baejm-vuef.appspot.com
```

## hosting

### Dependecies install

Dependencies installation

```bash
$ yarn # front-end install
$ cd functions && yarn # back-end install
$ cd ..
```

### firebaseConfig file make

make file on root

**./firebaseConfig.js**  
```javascript
export default {
  apiKey: "AIzaSyDKTU2Xp1a7F33M9i2pPXhmLcqPGU-Faow",
  authDomain: "baejm-vuef.firebaseapp.com",
  databaseURL: "https://baejm-vuef-default-rtdb.firebaseio.com",
  projectId: "baejm-vuef",
  storageBucket: "baejm-vuef.appspot.com",
  messagingSenderId: "640195138216",
  appId: "1:640195138216:web:791575ea6cb516fe7c689d"
};
```
