[![License: BSD](https://badgen.net/badge/license/BSD/orange)](https://opensource.org/licenses/BSD-3-Clause)
# Pan Fried Monkey Fisticuffs
A gamified vanilla JavaScript micro-interaction library for those who defiantly think for themselves! 🐒

<p align="center">
  <a target="_blank" href="https://thescottkrause.com/tags/javascript/">
  <img src="https://neodigm.github.io/pan-fried-monkey-fisticuffs/img/pan_fried_monkey_fisticuffs_logo_640_1280.jpg" title="D3js Skills with Audio ✨ JavaScript && TypeScript && Go 🪐">
  </a>
</p>

#
[Portfolio Blog](https://www.theScottKrause.com) |
[🚀 Résumé](https://thescottkrause.com/Arcanus_Scott_C_Krause_2020.pdf) |
[NPM](https://www.npmjs.com/~neodigm) |
[Github](https://github.com/neodigm) |
[LinkedIn](https://www.linkedin.com/in/neodigm24/) |
[Gists](https://gist.github.com/neodigm) |
[Salesforce](https://trailblazer.me/id/skrause) |
[Code Pen](https://codepen.io/neodigm24) |
[Machvive](https://machvive.com/) |
[Arcanus 55](https://www.arcanus55.com/) |
[Repl](https://repl.it/@neodigm) |
[Twitter](https://twitter.com/neodigm24) |
[Keybase](https://keybase.io/neodigm) |
[W3C](https://www.w3.org/users/123844)
#

<p align="center">
  <a target="_blank" href="https://thescottkrause.com/d3_datavis_skills.html">
  <img src="https://repository-images.githubusercontent.com/178555357/2b6ad880-7aa0-11ea-8dde-63e70187e3e9" title="D3js Skills with Audio ✨ JavaScript && TypeScript && Go 🪐">
  </a>
</p>

```javascript
function fetchSoundonload() {  //    The audio file has loaded async
    oAudContx.decodeAudioData(oAJAXReq.response, function (decAudBuf) {
        aAudioBuffer[ fetchSoundConfig.sound_current ] = decAudBuf;
        fetchSoundConfig.sound_current = fetchSoundConfig.sound_current + 1;
        if(fetchSoundConfig.sound_current <= fetchSoundConfig.sound_max){
            oAJAXReq = new XMLHttpRequest();
            oAJAXReq.responseType = "arraybuffer";
            fetchSound( fetchSoundConfig.sound_current );
        }
    });
};
function playAudioFile( nSound ) {
  if( CnfState.audio === true ){  //  Play MP3 if sound toggle is true
    try{
      var oSrc = oAudContx.createBufferSource();
      var volume = oAudContx.createGain();
      oSrc.buffer = aAudioBuffer[nSound];
      oSrc.connect(volume);
      volume.connect(oAudContx.destination);
      oSrc.connect(oAudContx.destination);
      oSrc.start(oAudContx.currentTime);
    } catch( e ){}
  }
};
```
