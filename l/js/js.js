/**
 * Created by Administrator on 2016/7/24.
 */
var aDiv=document.getElementsByClassName('choose')
for(var i=0;i<aDiv.length;i++){
    fn(aDiv[i])
}
function fn(ele){
    var aLi=ele.getElementsByTagName('li')
    var aDiv=ele.getElementsByTagName('div')
    var aA=ele.getElementsByTagName('a')
    for(var i=0;i<aLi.length;i++){
        aLi[i].index=i
        aLi[i].onmouseover=function(){
            for(var i=0;i<aLi.length;i++){
                //aLi[i].style.className='color'
                aA[i].style.color='#333333'
                aDiv[i].className=''
            }
            aDiv[this.index].className='bg'
            aA[this.index].style.color='#999999'

        }

    }
}
/*
var aDiv1=document.getElementById('choose')
var aLi=aDiv1.getElementsByTagName('li')
var aDiv=aDiv1.getElementsByTagName('div')
var aA=aDiv1.getElementsByTagName('a')
for(var i=0;i<aLi.length;i++){
    aLi[i].index=i
    aLi[i].onmouseover=function(){
        for(var i=0;i<aLi.length;i++){
            //aLi[i].style.className='color'
            aA[i].style.color='#333333'
            aDiv[i].className=''
        }
        aDiv[this.index].className='bg'
        aA[this.index].style.color='#999999'
        //aLi[i].style.className='bg'
    }

}*/
var aChild=document.getElementsByClassName('child')
var aChild1=document.getElementsByClassName('child1')
var aPar=document.getElementsByClassName('catch')
for(var i=0;i<aPar.length;i++){
    aPar[i].index=i
    aPar[i].onmouseover=function(){

        aChild[this.index].style.display='block'
        aChild1[this.index].style.display='block'
        //aChild1[i].style.display='block'
    }
    aPar[i].onmouseout=function(){

        aChild[this.index].style.display='none'
        aChild1[this.index].style.display='none'
        //aChild1[i].style.display='block'
    }
}
var oBtn=document.getElementsByTagName('input')[0]
var aLi=document.getElementsByTagName('li')
var oDiv=document.getElementsByClassName('list')[0]

/*oBtn.onkeyup=function(){
    //this.value=''
    var val=this.value.replace(/(^ +)|( +$)/,'')
    oDiv.style.display=val.length>0?'block':'none'
};*/
oBtn.onfocus=oBtn.onkeyup=function(){
    var val=this.value.replace(/(^ +)|( +$)/,'')
    oDiv.style.display=val.length>0?'block':'none'
    val.length===0?oBtn.setAttribute('placeholder','搜索职位公司或地点'):oBtn.setAttribute('placeholder','')
    /*oDiv.style.display='block'*/
    /*this.setAttribute('placeholder','ssddsd')*/
   /* oBtn.setAttribute('placeholder','ssddsd')*/
    //console.log(val.length)
}
document.body.onclick=function(e){
    e=e||window.event
    var tar= e.target|| e.srcElement
    if(tar.id==='text'){
        return
    }
    if(tar.tagName.toLowerCase()==='li'){
        //utils.firstChild(tar).innerHTML=tar.innerHTML
        oBtn.value=utils.firstChild(tar).innerHTML
    }
    oDiv.style.display='none'

}
var oBox=document.getElementById('box')
var oBoxInner=oBox.getElementsByTagName('div')[0]
var aDiv=oBoxInner.getElementsByTagName('div')
var aImg=oBoxInner.getElementsByTagName('img')
var oUl=document.getElementById('bgListLight')
var aLi=oUl.getElementsByTagName('li')
var oBoxInnerRCon=document.getElementById('boxInnerRCon')
/*aLi[1].style.display='none'
aLi[1].style.display='none'*/
//aLi[0].style.display='none'
//aLi[1].style.display='none'
//aLi[0].style.display='none'
/*aLi[1].style.display='none'
aLi[0].style.display='none'*/
var step=0
var autoTimer=setInterval(autoMove,3000)
function autoMove(){
    if(step==aDiv.length-1){
        step=-1
        //zhufengAnimate(oBoxInner,{top:0},500)
        //utils.css(oBoxInnerRCon,{top:0})
    }
    step++
    zhufengAnimate(oBoxInner,{top:-step*160},200)
    zhufengAnimate(oBoxInnerRCon,{top:step*55},200)
    //utils.css(oBoxInnerRCon,{top:step*55})
    bannerTip()
}
function bannerTip(){
for(var i=0;i<aLi.length;i++){
    //console.log(aLi[i].innerHTML)
    if(i===step){
        aLi[i].style.opacity=0;
        aLi[i].style.filter='alpha(opacity=0)';
        /*opacity:0.5;
        filter:alpha(opacity=50);*/
    }else{
        aLi[i].style.opacity=0.5;
        aLi[i].style.filter='alpha(opacity=50)';
    }

}
    oBox.onmouseover=function(){
        clearInterval(autoTimer)
    }
    oBox.onmouseout=function(){
        autoTimer=setInterval(autoMove,3000)
    }
    handleChange()
    function handleChange(){
        for(var i=0;i<aLi.length;i++){
            aLi[i].index=i
            //aLi[i].style.background='red'
            aLi[i].onmouseover=function(){
                /*aLi[i].style.background='red'*/
                //clearInterval(autoTimer)
                step=this.index
                console.log(this.index)
                zhufengAnimate(oBoxInner,{top:-step*160},200)
                zhufengAnimate(oBoxInnerRCon,{top:step*55},200)
                //utils.css(oBoxInnerRCon,{top:step*55})
                bannerTip()
            }
        }
    }
    /*aLi[1].onclick=function(){
        alert('a')
    }
*/
    var oUl = document.getElementById('moveImg');
    var oLis=oUl.getElementsByTagName('li')
    for(var i=0;i<oLis.length;i++){
        fn(oLis[i])
    }
    function fn(ele){

        var oSpan = ele.getElementsByTagName('span')[0];
        ele.onmouseenter = function(ev){
            var oEvent = ev||event;
            var q=getMousePos(this,oEvent);
            switch(q){
                case 0:
                    oSpan.style.left = '200px';
                    oSpan.style.top='0';
                    break;
                case 1:
                    oSpan.style.left='0'
                    oSpan.style.top = '200px';
                    break;
                case 2:
                    oSpan.style.left = '-200px';
                    oSpan.style.top='0';
                    break;
                case 3:
                    oSpan.style.left='0'
                    oSpan.style.top= '-200px';
                    break;
            }
            move(oSpan,{left:0,top:0})
        };
        ele.onmouseleave = function(ev){
            var oEvent = ev||event;
            var q=getMousePos(this,oEvent);
            switch(q){
                case 0:
                    move(oSpan,{left:200,top:0})
                    break;
                case 1:
                    move(oSpan,{left:0,top:200})
                    break;
                case 2:
                    move(oSpan,{left:-200,top:0})
                    break;
                case 3:
                    move(oSpan,{left:0,top:-200})
                    break;
            }
        }

        function getMousePos(obj,ev){
            var w = obj.offsetWidth;
            var h = obj.offsetHeight;
            var x = obj.offsetLeft+w/2-ev.pageX;
            var y = obj.offsetTop+h/2-ev.pageY;
            return Math.round((Math.atan2(y,x)*180/Math.PI+180)/90)%4;
        };
        function move(obj,json){
            var start={};
            var dis={};
            for(var name in json){
                start[name]=parseFloat(getComputedStyle(obj,false)[name]);
                switch(name){
                    case 'left':
                        start[name]=obj.offsetLeft;
                        break;
                    case 'top':
                        start[name]=obj.offsetTop;
                        break;
                }
                dis[name]=json[name]-start[name];
            }
            var count = Math.round(300/(1000/30));
            var n=0;
            clearInterval(obj.timer);
            obj.timer=setInterval(function(){
                n++;
                for(var name in json){
                    var a=n/count;
                    var cur = start[name]+dis[name]*a;
                    obj.style[name]=cur+'px';
                }
                if(n==count){
                    clearInterval(obj.timer);
                }
            },1000/30)
        }
    }
}
var aImg=utils.getByClass(document,'toTop')
var footer=document.getElementById('footer')
var footer1=document.getElementById('footer1')
//var oImg=document.getElementById('toTop')
for(var i=0;i<aImg.length;i++){
    f1(aImg[i])
}
function f1(cur){
    //cur.style.display='none';
    window.onscroll=computedDisplay;
    function computedDisplay(){
        console.log('aaaa')
        if(utils.win('scrollTop')>utils.win('clientHeight')){
            cur.style.display='block';

            //console.log('abba')
        }else{
            cur.style.display='none';
            //console.log('acccaa')
        }
        if(utils.win('scrollTop')>=2070){
            footer.style.display='block';
            footer1.style.display='none';
        }else{
            footer.style.display='none';
            footer1.style.display='block';
        }
    }
    cur.onclick=function(){
        footer1.style.display='block';
        this.style.display='none';
        if(utils.win('scrollTop')>utils.win('clientHeight')){
            cur.style.display='block';

            //console.log('abba')
        }else{
            cur.style.display='none';
            //console.log('acccaa')
        }
        window.onscroll=null;
        var target=utils.win('scrollTop');
        var duration=1000;
        var interval=30;
        var step=target/duration*interval;
        var timer=setInterval(function(){
            var curTop=utils.win('scrollTop');
            if(curTop<=0){
                clearInterval(timer);
                window.onscroll=computedDisplay;
                return;
            }
            curTop-=step;
            utils.win('scrollTop',curTop);
        },interval)
    }
}

footer.style.display='none';
footer1.style.display='block';
window.onscroll=f2
function f2(){
    console.log(utils.win('scrollTop'))
    if(utils.win('scrollTop')>=2070){
        footer.style.display='block';
        footer1.style.display='none';
    }else{
        footer.style.display='none';
        footer1.style.display='block';
    }
}









/*var oImg=document.getElementById('toTop')
for(var i=0;i<aImg.length;i++){
    oImg.style.display='block'
    window.onscroll=computedDisplay;
    function computedDisplay(){
        console.log('aaaa')
        if(utils.win('scrollTop')>utils.win('clientHeight')){
            oImg.style.display='block';
        }else{
            oImg.style.display='none';
        }
    }
    oImg.onclick=function(){
        this.style.display='none';
        window.onscroll=null;
        var target=utils.win('scrollTop');
        var duration=1000;
        var interval=30;
        var step=target/duration*interval;
        var timer=setInterval(function(){
            var curTop=utils.win('scrollTop');
            if(curTop<=0){
                clearInterval(timer);
                window.onscroll=computedDisplay;
                return;
            }
            curTop-=step;
            utils.win('scrollTop',curTop);
        },interval)
    }
}*/

