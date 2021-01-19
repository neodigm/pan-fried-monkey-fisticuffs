[![License: BSD](https://badgen.net/badge/license/BSD/orange)](https://opensource.org/licenses/BSD-3-Clause)
# Pan Fried Monkey Fisticuffs | Neodigm 55
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
  <img src="https://repository-images.githubusercontent.com/178555357/2b6ad880-7aa0-11ea-8dde-63e70187e3e9" title="D3js Skills with Audio ✨ JavaScript && TypeScript && Go 🪐 Electron && Vue.js && TypeScript && Go  🍰">
  </a>
</p>

```javascript
// Popup Modal Dialog Component | Reveal
var _aRevAct=0, _aRevX=0, _sRevId="", _bIsOpen = false, _fOnClose=null, _d=document;
var pfmfModal = {
  eRev: 0, eRevScrim: 0,
  "init" : function() {
    _aRevX = _d.getElementsByClassName("close-reveal-modal");
    for (var i = 0, ln = _aRevX.length; i < ln; i++) {
        _aRevX[i].addEventListener("click", pfmfModal.close, false);
    }
    _aRevAct = _d.querySelectorAll("[data-rev-id]");
    for (var i = 0, ln = _aRevAct.length; i < ln; i++) {
        _aRevAct[i].addEventListener("click", pfmfModal.open, false);
    }
    pfmfModal.eRevScrim = _d.getElementById("id-reveal__scrim");
  },
  "open" : function(e){
    _bIsOpen = true;
    _sRevId = this.getAttribute("data-rev-id");
    if(_sRevId){
      pfmfModal.eRevScrim.classList.add("reveal__scrim");
      pfmfModal.eRev = _d.getElementById(_sRevId);
      pfmfModal.eRev.classList.add("reveal__box");
      pfmfModal.eRev.parentElement.classList.remove("reveal__init");
        pfmfModal.eRev.style.top = String(window.pageYOffset + 84) + "px";
        pfmfModal.eRev.style.visibility = "visible";
      pfmfModal.eRev.setAttribute("aria-hidden", "false");
      e.preventDefault();
    }
    return false;
  },
  "close" : function(e){
    _bIsOpen = false;
    pfmfModal.eRevScrim.classList.remove("reveal__scrim");
    pfmfModal.eRev.classList.remove("reveal__box");
    pfmfModal.eRev.parentElement.classList.add("reveal__init");
    pfmfModal.eRev.setAttribute("aria-hidden", "true");
    if(e){ e.preventDefault(); }
    if( _fOnClose ) _fOnClose();
  },
  "autoOpen" : function(_sId){
    _bIsOpen = true;
    _sRevId = _sId;
    if(_sRevId){
      pfmfModal.eRevScrim.classList.add("reveal__scrim");
      pfmfModal.eRev = _d.getElementById(_sRevId);
      pfmfModal.eRev.classList.add("reveal__box");
      pfmfModal.eRev.parentElement.classList.remove("reveal__init");
        pfmfModal.eRev.style.top = String(window.pageYOffset + 84) + "px";
        pfmfModal.eRev.style.visibility = "visible";
      pfmfModal.eRev.setAttribute("aria-hidden", "false");
    }
    return false;
  },
  "isOpen" : function(){
    return _bIsOpen;
  },
  "setOnClose" : function( _f ){
    if( _f ) _fOnClose = _f;
  }
}; pfmfModal.init();
```
👁️ UX ⚡ Vue.js and WebGL (WASM 🐹 GoLang) 🍭
