# Git on Dropbox
This module is tool for git on dropbox.**This is OSX only**.

## Install
You must be install [Dropbox-OSX](https://www.dropbox.com/en/downloading?os=mac)
```
npm i -g drit
```

## Init git directory in dropbox
```
drit init
# mkdir $HOME/Dropbox/Git
```

## Create repo in dropbox
In git project dir
```
drit create
# git init --bare  $HOME/Dropbox/Git/MyProject.git
# git remote add drit $HOME/Dropbox/Git/MyProject.git
git push drit master
```

## List drit repos
```
drit ls
>> MyProject
>> MyProject2
```

## Clone drit repo
```
drit clone MyProject Project
# git clone $HOME/Dropbox/Git/MyProject.git Project
```

********
## License
The MIT License
## Author
[@etkshi](https://twitter.com/etkshi)
