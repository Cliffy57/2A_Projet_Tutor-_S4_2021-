# Dix-Cover
Le projet tuteuré de Clause Axel, Di Paolo Hugo, De Matos Ribeiro Romain, Leduc Thomas, Allegra Nathan

## Comment télécharger l'application
Téléchargez le .zip dans le dossier Application-Cordova
##### Les nodes modules de Cordova ne pouvants pas être ajouté via une commande terminale ( similaire à npm i ) il fallait les importer directement dans le repo, mais cela faisait beaucoup trop de fichiers pour commit tel quel , alors nous avons tout archivé en zip.

Une fois dezippé, ouvrez le répertoire avec PowerShell ou Git Bash ( CMD peut causer des erreurs )
Allez dans le repertoire de l'application React
```
cd my-react-app
```
Installez les modules React
```
npm i
```
Buildez l'Application
``` 
npm run build
```
L'application React est maintenant opérationelle, lancez la avec ```npm run start```
Pour lancer l'application sur Cordova, il faut retourner dans le dossier Cordova, build l'application et la lancer
```
cd ..
cordova build android
cordova run android //pour téléphone
cordova emulate android //pour emulateur
```
L'application devrait maintenant fonctionner. Si ce n'est pas le cas, regarder si la platforms ```android``` est installé, et les plugins ```geolocation``` et ```vibration```.
Si cela ne marche toujours pas, l'apk est disponible dans le repertoir APK du repository.

## Pre-requis
Merci d'activer la géolocalisation et de désactiver le mode silencieux de l'appareil pour profiter de toutes les fonctionnalitées.

## Bugs connus
L'application affiche page blanche avec une barre de navigation lors du lancement, cela n'est pas le résultat souhaité ( le lancement sur React fonctionne et lance l'Application sur la page d'accueil ). Cependant l'application est entièrement utilisable grâce à la barre de navigation.
Les recherches de lieux doivent impérativement respecter la "case sensitivity" ou il n'y auras pas de résultats.
