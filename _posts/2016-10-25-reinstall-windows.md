---
layout: project
type: personal
noimage: '<i class="fa fa-code-fork fa-big12" aria-hidden="true"></i>'
image: 
title: Reinstall Windows
github: https://github.com/AlexisTM/Reinstall-Windows-Dependencies
description: List of <strong>things to think to reinstall</strong> when formatting your computer.
---

# Software

## Daily use
Any program you wants to use daily /* *MUST HAVE* */

* [Sublime Text](http://www.sublimetext.com/), [Notepad++](https://notepad-plus-plus.org) - Text Editor
* [Google Chrome](https://www.google.com/chrome/), Edge, [Firefox](https://www.mozilla.org/fr/firefox/new/), Iceweasel, [Chromium](https://www.chromium.org/) - Web crawler
* [Vuze or Leap](http://www.vuze.com/?lang=fr_FR), [µTorrent](http://www.utorrent.com/), [BitTorrent](http://www.bittorrent.com/) - Torrents
* [Peerblock](http://www.peerblock.com/) - Block malicious website, Hadopi, Botnets, ...
* [Dropbox](https://www.dropbox.com/), [Google Drive](https://drive.google.com/drive/), [OneDrive](https://onedrive.live.com/)
* [Malware Byte's](https://fr.malwarebytes.org)
* [7-zip](http://www.7-zip.org/)
* [Ccleaner](https://www.piriform.com/ccleaner/download) - Can clean the last Windows copy
* [Defraggler](https://www.piriform.com/defraggler) - Optimise your SSD & defrag your HDD
* [DirectX](https://www.microsoft.com/fr-be/download/details.aspx?id=35) - I always forget DirectX..
* Windows Office

## Develop
Apps to develop

* [Visual Studio Community](https://www.visualstudio.com/)
* [Python 2 or 3](https://www.python.org/)
* [Git bash](https://git-scm.com/), [GitHub](https://windows.github.com/) or [Other GIT GUI](https://git-scm.com/downloads/guis)
* [NodeJS](http://nodejs.org/)
* [MongoDB](https://www.mongodb.org/)
* [Wamp](http://www.wampserver.com/)
* [Go](https://golang.org/dl/)
* [ConEMU](https://code.google.com/p/conemu-maximus5/), TMux - Console multiplexer 
* [Wireshark](https://www.wireshark.org/) - Network Listener
* [WinSCP](https://winscp.net/) - SSH, SFTP, FTP client
* [Fiddler](http://www.telerik.com/fiddler) - Listen HTTP network

## Plugins
Plugins to use with other programs

* Python
	* [PIP](https://pypi.python.org/pypi/pip), [Setuptools](https://pypi.python.org/pypi/setuptools)
* Sublime Text
	* [Package control](https://packagecontrol.io/installation)
* [Heroku Toolbelt](https://devcenter.heroku.com/articles/getting-started-with-php#set-up)
* Google Chrome
	* [AdBlock Plus](https://adblockplus.org/fr/) 

## Entertainement
Apps to enjoy life

* [Skype](http://www.skype.com/fr/download-skype/skype-for-computer/), [Teamspeak](http://www.teamspeak.com/), [Curse Voice](http://cursevoice.com)
* [Mediamonkey](http://www.mediamonkey.com/welcome.htm?l=fr) - Music player, lyrics, works well even with 2k+ songs.
* [VLC](http://www.videolan.org/vlc/) - Media player
* [VoiceMeter](http://vb-audio.pagesperso-orange.fr/Voicemeeter/) - Fabulous audio multiplexer, professionnal grade
* [Open Broadcaster](https://obsproject.com/)
* [Steam](http://store.steampowered.com/)
* [XMind](https://www.xmind.net/) - Chart, mindmap creator
* [Teamviewer](https://www.teamviewer.com) - Help your friends
* [Texmaker](http://www.xm1math.net/texmake) - If you want to make great documents

# CONFIG
What configurations should I remember to do ?

* VPN or Proxy if needed
* [Show file extensions](http://windows.microsoft.com/en-us/windows/show-hide-file-name-extensions#show-hide-file-name-extensions=windows-7)
* Update drivers via [Ma-config.com](http://www.ma-config.com/)

I got an SSD, what should I remember to do ?

* Change the location of music, videos, pictures (in W10 system menu)
* Change Appdata folder location to HDD (I do not, for speed)
* Change Temp folder location to HDD (Environnement variable to `D:\Temp\User` and `D:\Temp\System`)
* Enable AHCI
* Enable TRIM (`fsutil behavior set disabledeletenotify 0`)
* Disable system restore
* Disable indexing on SSD, [Move index folder to HDD](http://windows.microsoft.com/fr-be/windows7/change-advanced-indexing-options)
* Disable Hibernation ( `powercfg -h off` )
* Disable Prefetch & Superfetch ( `HKEY_LOCAL_MACHINE\CurrentControlSet\Control\SessionManager\Memory Management\PrefetchParameters`)
* Disable service for Superfetch ( `services.msc` )
* Disable ClearPageFileAtShutdown and LargeSystemCache ( `HKEY_LOCAL_MACHINE\CurrentControlSet\Control\SessionManager\Memory Management` )

### Source

https://www.maketecheasier.com/12-things-you-must-do-when-running-a-solid-state-drive-in-windows-7/