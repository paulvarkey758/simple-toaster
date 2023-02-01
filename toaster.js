class Toaster{
    constructor(){
        this.body=document.getElementsByTagName("body")
    }
    createBox(){
        this.body[0].style.position="relative"
        var toastDiv=document.createElement('div')
        toastDiv.setAttribute('id','toaster-outer')
        this.body[0].appendChild(toastDiv)
        document.getElementById("toaster-outer").innerHTML='<div id="icon"></div><div id="toaster-message"></div>'
        document.getElementById("toaster-outer").style.cssText="padding:10px 20px;position:absolute;top:20px;right:20px;border-radius:10px;display:flex;box-shadow:0px 5px 15px black;"
        document.getElementById("toaster-message").style.cssText="color:white;font-weight:bold;font-size:1.3rem;"
        document.getElementById("icon").style.cssText="width:1.6rem;height:1.6rem;margin-right:10px;fill:white;"
    }
    error(msg){
        this.createBox()
        document.getElementById("icon").innerHTML='<svg viewBox="0 0 512 512"><path d="M256 32c14.2 0 27.3 7.5 34.5 19.8l216 368c7.3 12.4 7.3 27.7 .2 40.1S486.3 480 472 480H40c-14.3 0-27.6-7.7-34.7-20.1s-7-27.8 .2-40.1l216-368C228.7 39.5 241.8 32 256 32zm0 128c-13.3 0-24 10.7-24 24V296c0 13.3 10.7 24 24 24s24-10.7 24-24V184c0-13.3-10.7-24-24-24zm32 224c0-17.7-14.3-32-32-32s-32 14.3-32 32s14.3 32 32 32s32-14.3 32-32z"/></svg>'
        document.getElementById("toaster-outer").style.backgroundColor="red"
        document.getElementById("toaster-message").innerHTML=msg
        setTimeout(()=>{
            document.getElementById("toaster-outer").remove()
        },2000)
    }

    success(msg){
        this.createBox()
        document.getElementById("icon").innerHTML='<svg viewBox="0 0 512 512"><path d="M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"/></svg>'
        document.getElementById("toaster-outer").style.backgroundColor="green"
        document.getElementById("toaster-message").innerHTML=msg
        setTimeout(()=>{
            document.getElementById("toaster-outer").remove()
        },2000)
    }

    information(msg){
        this.createBox()
        document.getElementById("icon").innerHTML='<svg viewBox="0 0 512 512"><path d="M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-144c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z"/></svg>'
        document.getElementById("toaster-outer").style.backgroundColor="#2e42a9"
        document.getElementById("toaster-message").innerHTML=msg
        setTimeout(()=>{
            document.getElementById("toaster-outer").remove()
        },2000)
    }

    warning(msg){
        this.createBox()
        document.getElementById("icon").innerHTML='<svg viewBox="0 0 512 512"><path d="M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zm0-384c13.3 0 24 10.7 24 24V264c0 13.3-10.7 24-24 24s-24-10.7-24-24V152c0-13.3 10.7-24 24-24zm32 224c0 17.7-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32z"/></svg>'
        document.getElementById("toaster-outer").style.backgroundColor="#c1bf1a"
        document.getElementById("toaster-message").innerHTML=msg
        setTimeout(()=>{
            document.getElementById("toaster-outer").remove()
        },2000)
    }

}

let toaster=new Toaster()