'use strict';

function Ctrl(view,model){
    this.scrollTop=window.pageYOffset || model.docEl.scrollTop || model.body.scrollTop;
    this.prevScrollTop=this.scrollTop;
    this.init();
}

Ctrl.prototype.getElemPos = function(){
    var body = window.pageYOffset || document.documentElement.scrollTop;
    var scrollBody = parseInt(body);
    return scrollBody;
}

Ctrl.prototype.topStick = function(){
    var self=this;
    var pos = self.getElemPos();
    if (pos>500 || parseInt(model.docEl.offsetWidth)<992){
        view.topMenuColor(model.menuId,'true');
    }
    else{
        view.topMenuColor(model.menuId,'false');
    }
}

Ctrl.prototype.mobMenuColor = function(){
    var self=this;
    if(parseInt(model.docEl.offsetWidth)<992){
        view.topMenuColor(model.menuId,'true');
    }
}

Ctrl.prototype.picTransform = function(elem, presentScrollTop){
    var top = parseInt(getComputedStyle(elem).top);
    view.picAnimation(elem, top, presentScrollTop); 
}

Ctrl.prototype.getCoordY = function(elem){
    var box = elem.getBoundingClientRect();
    var top = box.top + this.scrollTop - model.clientTop;
    return {
        top:top,
        height:box.top-box.bottom
    }
}

Ctrl.prototype.getScrollPage = function(){
    self.scrollTop = window.pageYOffset || model.docEl.scrollTop || model.body.scrollTop;
    var presentScrollTop=self.scrollTop-self.prevScrollTop;
    self.prevScrollTop=self.scrollTop;
    return presentScrollTop;
}

Ctrl.prototype.mobMenuAnimation = function(flag){
    function animate(draw, duration) {
          var start = performance.now();

          requestAnimationFrame(function animate(time){
              var timePassed = time - start;
              if (timePassed > duration)
                  timePassed = duration;
              draw(timePassed);
              if (timePassed < duration)
                  requestAnimationFrame(animate);
          });
    }
    animate(function(timePassed) {
        if(flag==='true')
            model.mobListMenu.style.left = -335 + timePassed*0.67 + 'px';
        else
            model.mobListMenu.style.left = -335 + 'px';  
    }, 500);
}

Ctrl.prototype.init = function(){
    var self=this;
    self.mobMenuColor();
    window.addEventListener('scroll', function() {
        self.topStick();
        var presentScrollTop=self.getScrollPage();
        if(presentScrollTop>40)
            presentScrollTop=40;
        if(presentScrollTop<-40)
            presentScrollTop=-40;
        for(var i=0;i<model.picTransformId.length;i++){
            var coordYElem = self.getCoordY(model.picTransformId[i]);
            if(coordYElem.top<self.scrollTop+model.winHeight && coordYElem.top>self.scrollTop+coordYElem.height){
                self.picTransform(model.picTransformId[i], presentScrollTop);
            }
        }
    });
    
    model.backToTop.addEventListener('click', function(){
       view.scrollToTop(); 
    });
    
    model.scrollDown.addEventListener('click', function(){
        var h = parseInt(getComputedStyle(model.headerId).height);
        view.scrollDown(h);
    })
    
    model.mobMenu.addEventListener('click', function(){
        model.mobMenu.classList.toggle("active");
        if(model.mobMenu.classList.contains('active')){
            document.documentElement.style.overflowY = 'hidden';
            model.mobFon.style.display = 'block';
            self.mobMenuAnimation('true');
        }
        else{
            document.documentElement.style.overflowY = 'scroll';
            model.mobFon.style.display = 'none';
            self.mobMenuAnimation('false');
        }
    })
}