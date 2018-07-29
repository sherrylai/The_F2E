var $star = $('.star')
var $circle = $('.circle')
var $square = $('.square')

TweenLite.to($star, 5, {rotation: 360, ease: Power2.easeOut})
TweenLite.to($circle, 5, {rotation: 360, ease: Power2.easeOut})
TweenLite.to($square, 5, {rotation: -360, ease: Power2.easeOut})

TweenLite.to($circle, 2.5, {css:{scale:1.1}})
TweenLite.to($circle, 2.5, {css:{scale:1},delay:2.5})

TweenLite.to($square, 1.6, {css:{scale:7}, ease: Power2.easeOut,delay:5})
TweenLite.to($circle, 1.6, {css:{scale:7}, ease: Power2.easeOut,delay:5})
TweenLite.to($star, 1.6, {css:{scale:7}, ease: Power2.easeOut,delay:5})