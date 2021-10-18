// neodigm 55 JS v1.0.2 | Scott C. Krause | neodigm | Gamefried JavaScript Framework

var neodigm = {};

// neodigm Modal Begin //
var _aRevAct=0, _aRevX=0, _sRevId="", _bIsOpen = false, _fOnClose=null, _d=document;
var neodigmPop = {
  eRev: 0, eRevScrim: 0,
  "init" : function() {
    _aRevX = _d.getElementsByClassName("close-reveal-modal");
    for (var i = 0, ln = _aRevX.length; i < ln; i++) {
        _aRevX[i].addEventListener("click", neodigmPop.close, false);
    }
    _aRevAct = _d.querySelectorAll("[data-rev-id]");
    for (var i = 0, ln = _aRevAct.length; i < ln; i++) {
        _aRevAct[i].addEventListener("click", neodigmPop.open, false);
    }
    neodigmPop.eRevScrim = _d.getElementById("id-reveal__scrim");
  },
  "open" : function(e){
    _bIsOpen = true;
    _sRevId = this.getAttribute("data-rev-id");
    if(_sRevId){
      neodigmPop.eRevScrim.classList.add("reveal__scrim");
      neodigmPop.eRev = _d.getElementById(_sRevId);
      neodigmPop.eRev.classList.add("reveal__box");
      neodigmPop.eRev.parentElement.classList.remove("reveal__init");
        neodigmPop.eRev.style.top = String(window.pageYOffset + 84) + "px";
        neodigmPop.eRev.style.visibility = "visible";
      neodigmPop.eRev.setAttribute("aria-hidden", "false");
      e.preventDefault();
    }
    return false;
  },
  "close" : function(e){
    _bIsOpen = false;
    neodigmPop.eRevScrim.classList.remove("reveal__scrim");
    neodigmPop.eRev.classList.remove("reveal__box");
    neodigmPop.eRev.parentElement.classList.add("reveal__init");
    neodigmPop.eRev.setAttribute("aria-hidden", "true");
    if(e){ e.preventDefault(); }
    if( _fOnClose ) _fOnClose();
  },
  "autoOpen" : function(_sId){
    _bIsOpen = true;
    _sRevId = _sId;
    if(_sRevId){
      neodigmPop.eRevScrim.classList.add("reveal__scrim");
      neodigmPop.eRev = _d.getElementById(_sRevId);
      neodigmPop.eRev.classList.add("reveal__box");
      neodigmPop.eRev.parentElement.classList.remove("reveal__init");
        neodigmPop.eRev.style.top = String(window.pageYOffset + 84) + "px";
        neodigmPop.eRev.style.visibility = "visible";
      neodigmPop.eRev.setAttribute("aria-hidden", "false");
    }
    return false;
  },
  "isOpen" : function(){
    return _bIsOpen;
  },
  "setOnClose" : function( _f ){
    if( _f ) _fOnClose = _f;
  }
}; neodigmPop.init();
// neodigm Modal End //
// neodigm Toast Begin //
// neodigm Vivid Begin //
// neodigm Type Begin //
// neodigm Marq Begin //
// neodigm Carousel Begin //
// neodigm Heartbeat emitter Begin//
// neodigm Simple Expand Begin//
// neodigm Popover Begin//
// neodigm Dice Begin//
// neodigm Tradecraft Begin//
// neodigm Material Input Begin//
// neodigm accolades carousel Begin//
// neodigm a11y skip Begin//

neodigm.a11y = true;
if( typeof neodigm != "undefined"){
  if( neodigm.a11y ){
    neodigm.f_a11y = function(_d){
      return{
        init: function(){

        }
      }
    }( document );
  }
}


"use strict";
var oD = document;
if (location.protocol == "http:"){ 
  //if(location.port != "8080"){ location.href = 'https:' + window.location.href.substring(window.location.protocol.length); }
}
var isMobile = function(){ return (oD.body.clientWidth <= 768) ? true : false; },
oURL = new URLSearchParams(window.location.search);

function f1210(){ return (Math.floor(Math.random() * (10) + 1)); }

// neodigm Audio Begin //

var CnfState = {"audio": false, "base": "https://neodigm.github.io/brand_logo_graphic_design/fantastic/discerning/"};
var AudioContext = window.AudioContext || false;
if (AudioContext) {
  CnfState.audio = true;    //    Icanuse
  var oAudContx = new AudioContext();    //    HTML5 Audio
  var oAJAXReq = new XMLHttpRequest();   //    Get Sounds
  var aAudioBuffer = new Array(18);       //    Store Sound files
  var fetchSoundConfig = {sound_max: 18, sound_current: 1};    //    Sound limits
  setTimeout( function(){ fetchSound(); }, 5600);
}
function fetchSound() {
    //    AJAX a single sound binary
    oAJAXReq.open("GET", CnfState.base + "au/a" + fetchSoundConfig.sound_current + ".mp3", true);
    oAJAXReq.responseType = "arraybuffer";
    oAJAXReq.send();
    oAJAXReq.onload = fetchSoundonload;
}
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

function playAudioRand( aSound ){  //  Either Or | array | max 2
  playAudioFile( aSound[Math.random()+.5|0]);
}


