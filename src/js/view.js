'use strict';

function View(){
    this.topMenuColor = function(elem,flag){
        if(flag==='true'){
            elem.style.backgroundColor = 'rgb(53, 73, 90)';
            elem.style.boxShadow = '0 0 30px rgb(53, 73, 90)';
        }
        else{
            elem.style.backgroundColor = 'rgba(53, 72, 89, .3)';
            elem.style.boxShadow = 'none';
        }
    }
    
    this.picAnimation = function(elem, top, presentScrollTop){
        elem.style.top=top+presentScrollTop/5+'px';
    }
    
    this.scrollToTop = function(){
        //document.documentElement.scrollTop=0;
        window.scrollTo(0,0);
    }
    
    this.scrollDown = function(h){
        //document.documentElement.scrollTop=h;
        window.scrollTo(0,h);
    }
    

}