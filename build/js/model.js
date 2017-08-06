"use strict";function Model(e){this.headerId=document.getElementById("header"),this.menuId=document.getElementsByClassName(e)[0],this.picTransformId=document.getElementsByClassName("img"),this.backToTop=document.getElementsByClassName("backToTop")[0],this.scrollDown=document.getElementsByClassName("scrollIcon")[0],this.mobMenu=document.getElementsByClassName("mobMenu")[0],this.mobFon=document.getElementsByClassName("mobFon")[0],this.mobListMenu=document.getElementsByClassName("mobListMenu")[0],this.pageHeight=window.offsetHeight,this.winHeight=window.innerHeight,this.body=document.body,this.docEl=document.documentElement,this.clientTop=this.docEl.clientTop||this.body.clientTop||0}
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZGVsLmpzIl0sIm5hbWVzIjpbIk1vZGVsIiwibWVudUlkIiwidGhpcyIsImhlYWRlcklkIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJwaWNUcmFuc2Zvcm1JZCIsImJhY2tUb1RvcCIsInNjcm9sbERvd24iLCJtb2JNZW51IiwibW9iRm9uIiwibW9iTGlzdE1lbnUiLCJwYWdlSGVpZ2h0Iiwid2luZG93Iiwib2Zmc2V0SGVpZ2h0Iiwid2luSGVpZ2h0IiwiaW5uZXJIZWlnaHQiLCJib2R5IiwiZG9jRWwiLCJkb2N1bWVudEVsZW1lbnQiLCJjbGllbnRUb3AiXSwibWFwcGluZ3MiOiJBQUFBLGFBRUEsU0FBU0EsTUFBTUMsR0FDWEMsS0FBS0MsU0FBU0MsU0FBU0MsZUFBZSxVQUN0Q0gsS0FBS0QsT0FBT0csU0FBU0UsdUJBQXVCTCxHQUFRLEdBQ3BEQyxLQUFLSyxlQUFlSCxTQUFTRSx1QkFBdUIsT0FDcERKLEtBQUtNLFVBQVVKLFNBQVNFLHVCQUF1QixhQUFhLEdBQzVESixLQUFLTyxXQUFXTCxTQUFTRSx1QkFBdUIsY0FBYyxHQUM5REosS0FBS1EsUUFBUU4sU0FBU0UsdUJBQXVCLFdBQVcsR0FDeERKLEtBQUtTLE9BQU9QLFNBQVNFLHVCQUF1QixVQUFVLEdBQ3RESixLQUFLVSxZQUFZUixTQUFTRSx1QkFBdUIsZUFBZSxHQUNoRUosS0FBS1csV0FBV0MsT0FBT0MsYUFDdkJiLEtBQUtjLFVBQVVGLE9BQU9HLFlBQ3RCZixLQUFLZ0IsS0FBS2QsU0FBU2MsS0FDbkJoQixLQUFLaUIsTUFBUWYsU0FBU2dCLGdCQUN0QmxCLEtBQUttQixVQUFZbkIsS0FBS2lCLE1BQU1FLFdBQWFuQixLQUFLZ0IsS0FBS0csV0FBYSIsImZpbGUiOiJtb2RlbC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcclxuXHJcbmZ1bmN0aW9uIE1vZGVsKG1lbnVJZCl7XHJcbiAgICB0aGlzLmhlYWRlcklkPWRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdoZWFkZXInKTtcclxuICAgIHRoaXMubWVudUlkPWRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUobWVudUlkKVswXTtcclxuICAgIHRoaXMucGljVHJhbnNmb3JtSWQ9ZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnaW1nJyk7XHJcbiAgICB0aGlzLmJhY2tUb1RvcD1kb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdiYWNrVG9Ub3AnKVswXTtcclxuICAgIHRoaXMuc2Nyb2xsRG93bj1kb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdzY3JvbGxJY29uJylbMF07XHJcbiAgICB0aGlzLm1vYk1lbnU9ZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnbW9iTWVudScpWzBdO1xyXG4gICAgdGhpcy5tb2JGb249ZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnbW9iRm9uJylbMF07XHJcbiAgICB0aGlzLm1vYkxpc3RNZW51PWRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ21vYkxpc3RNZW51JylbMF07XHJcbiAgICB0aGlzLnBhZ2VIZWlnaHQ9d2luZG93Lm9mZnNldEhlaWdodDtcclxuICAgIHRoaXMud2luSGVpZ2h0PXdpbmRvdy5pbm5lckhlaWdodDtcclxuICAgIHRoaXMuYm9keT1kb2N1bWVudC5ib2R5O1xyXG4gICAgdGhpcy5kb2NFbCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcclxuICAgIHRoaXMuY2xpZW50VG9wID0gdGhpcy5kb2NFbC5jbGllbnRUb3AgfHwgdGhpcy5ib2R5LmNsaWVudFRvcCB8fCAwO1xyXG59XHJcbiJdfQ==