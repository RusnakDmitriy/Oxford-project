'use strict';

function Model(menuId){
    this.headerId=document.getElementById('header');
    this.menuId=document.getElementsByClassName(menuId)[0];
    this.picTransformId=document.getElementsByClassName('img');
    this.backToTop=document.getElementsByClassName('backToTop')[0];
    this.scrollDown=document.getElementsByClassName('scrollIcon')[0];
    this.mobMenu=document.getElementsByClassName('mobMenu')[0];
    this.mobFon=document.getElementsByClassName('mobFon')[0];
    this.mobListMenu=document.getElementsByClassName('mobListMenu')[0];
    this.pageHeight=window.offsetHeight;
    this.winHeight=window.innerHeight;
    this.body=document.body;
    this.docEl = document.documentElement;
    this.clientTop = this.docEl.clientTop || this.body.clientTop || 0;
}
