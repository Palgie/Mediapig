define(["require","exports","module","move","helpers"],function(e,t,n,a){var s={init:function(e,t){console.log(e);for(var n=e.getElementsByClassName(t.childClass),a=0,r=n[0],l=0,i=r.childNodes.length;i>l;l++){var o=r.childNodes[l];a+=o.offsetWidth}var d=a-r.offsetWidth;r.style.width=a+"px";var f=r.getBoundingClientRect(),c=e.getBoundingClientRect(),m=(e.offsetWidth-r.offsetWidth+d)/2,u=f.left,g=c.left+m,h={childx:u,parentx:g,movementRoom:d,childWidth:r.offsetWidth,childrenWidth:a};s.createArrows(e,t,h)},createArrows:function(e,t,n){console.log(e);var a='<a href="#" class="slide-arrow-left icon-arrow-left"></a>',r='<a href="#" class="slide-arrow-right"></a>';e.insertAdjacentHTML("beforeend",a),e.insertAdjacentHTML("beforeend",r),s.arrowEvents(e,t,n)},arrowEvents:function(e,t,n){a.defaults={duration:5e3},e.getElementsByClassName("slide-arrow-right")[0].addEventListener("mouseenter",function(e){var s=e.currentTarget.parentNode.getElementsByClassName(t.childClass)[0];a.defaults.duration=250*s.childNodes.length;var r=n.movementRoom+2*(n.childx-n.parentx);a(s).set("margin-left","-"+r).end(),s.style.webkitAnimationPlayState="running"}),e.getElementsByClassName("slide-arrow-left")[0].addEventListener("mouseenter",function(e){var n=e.currentTarget.parentNode.getElementsByClassName(t.childClass)[0];a.defaults.duration=250*n.childNodes.length,a(n).set("margin-left",0).end(),n.style.webkitAnimationPlayState="running"}),e.getElementsByClassName("slide-arrow-right")[0].addEventListener("mouseleave",function(e){var n=e.currentTarget.parentNode.getElementsByClassName(t.childClass)[0];a.defaults.duration=250*n.childNodes.length,n.style.webkitTransitionDuration="0s",n.style.webkitAnimationPlayState="paused",n.style.marginLeft=a(n).current("margin-left")}),e.getElementsByClassName("slide-arrow-left")[0].addEventListener("mouseleave",function(e){var n=e.currentTarget.parentNode.getElementsByClassName(t.childClass)[0];a.defaults.duration=250*n.childNodes.length,n.style.webkitTransitionDuration="0s",n.style.webkitAnimationPlayState="paused",n.style.marginLeft=a(n).current("margin-left")})}};n.exports=s});