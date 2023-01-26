class Toaster{
    constructor(){
        this.body=document.getElementsByTagName("body")
    }
    createBox(){
        this.body[0].style.position="relative"
        var toastDiv=document.createElement('div')
        toastDiv.setAttribute('id','toaster-outer')
        this.body[0].appendChild(toastDiv)
        document.getElementById("toaster-outer").innerHTML='<img id="icon"><div id="toaster-message"></div>'
        document.getElementById("toaster-outer").style.cssText="padding:10px 20px;position:absolute;top:20px;right:20px;border-radius:10px;display:flex;box-shadow:0px 5px 15px black;"
        document.getElementById("toaster-message").style.cssText="color:white;font-weight:bold;font-size:1.3rem;"
        document.getElementById("icon").style.cssText="width:1.6rem;height:1.6rem;margin-right:10px;"
    }
    error(msg){
        this.createBox()
        document.getElementById("icon").setAttribute('src','error.png')
        document.getElementById("toaster-outer").style.backgroundColor="red"
        document.getElementById("toaster-message").innerHTML=msg
        setTimeout(()=>{
            document.getElementById("toaster-outer").remove()
        },2000)
    }

    success(msg){
        this.createBox()
        document.getElementById("icon").setAttribute('src','success.png')
        document.getElementById("toaster-outer").style.backgroundColor="green"
        document.getElementById("toaster-message").innerHTML=msg
        setTimeout(()=>{
            document.getElementById("toaster-outer").remove()
        },2000)
    }

    information(msg){
        this.createBox()
        document.getElementById("icon").setAttribute('src','information.png')
        document.getElementById("toaster-outer").style.backgroundColor="#2e42a9"
        document.getElementById("toaster-message").innerHTML=msg
        setTimeout(()=>{
            document.getElementById("toaster-outer").remove()
        },2000)
    }

    warning(msg){
        this.createBox()
        document.getElementById("icon").setAttribute('src','warning.png')
        document.getElementById("toaster-outer").style.backgroundColor="#c1bf1a"
        document.getElementById("toaster-message").innerHTML=msg
        setTimeout(()=>{
            document.getElementById("toaster-outer").remove()
        },2000)
    }

}

let toaster=new Toaster()