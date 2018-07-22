// var canvas = document.getElementById("mycanvas")
// var ctx = canvas.getContext("2d")

// var ww = window.innerWidth
// var wh = window.innerHeight

// canvas.width = ww
// canvas.height = wh

// var ship = {
//   x:0,
//   y=0,
//   deg: 0
// }

// function init() {
//   ship.deg=45
// }

// function update() {
//   ship.x+=0.1
//   ship.y+=0.5
// }

// function draw() {
//   ctx.fillStyle="#001D2E"
//   ctx.fillRect(0,0,ww,wh)

//   ctx.fillRect(ship.x,ship.y,50,50)

//   requestAnimationFrame(draw)
// }


// init()
// setInterval(update,30)
// requestAnimationFrame(draw)





var canvas = document.getElementById("mycanvas")
var ctx = canvas.getContext("2d")
var ww = window.innerWidth,
  wh = window.innerHeight
var time = 0
var ship = {
  x:0,
  y:0,
  deg: 0,
  r:50
}

function init() {
  ship.deg=0
  // ship.x=Math.random()*ww
  // ship.y=Math.random()*wh
  canvas.width = ww
  canvas.height = wh
}
function update() {
  // ctx.fillStyle = "black"
  // ctx.fillRect(0, 0, ww, wh)
  // time++
  // ship.x+=0.1
  // ship.y+=0.5
  ship.deg=MousePos.x/50
  console.log(MousePos)
  // ship.deg+=0.05
}
function draw() {
  ctx.fillStyle = "#001D2E"
  ctx.fillRect(0, 0, ww, wh)


  //滑鼠
  // ctx.fillStyle="red"
  // ctx.beginPath()
  // ctx.circle(MousePos,3)
  // ctx.fill()

  // ctx.save()
  //   ctx.beginPath()
  //   ctx.translate(MousePos.x,MousePos.y)
  //       ctx.strokeStyle="red"
  //       let len =20
  //       ctx.line(new Vec2(-len,0),new Vec2(len,0))
  //       ctx.rotate()
  //       ctx.stroke()
  // ctx.restore()

  //格線
  let span = 50
  ctx.beginPath()
  for (var i = 0; i < ww; i += span) {
    ctx.moveTo(i, 0)
    ctx.lineTo(i, wh)
  }

  for (var i = 0; i < wh; i += span) {
    ctx.moveTo(0, i)
    ctx.lineTo(ww, i)
  }

  ctx.strokeStyle = "rgba(255,255,255,0.2)"
  ctx.stroke()

  ctx.save()

    //船
    ctx.translate(ww/2,wh/2)
    ctx.rotate(ship.deg)

    
    ctx.fillStyle="white"
    ctx.fillRect(65,-25/2,25,25)

    ctx.beginPath()
    ctx.arc(0, 0, ship.r, 0, Math.PI * 2)
    ctx.strokeStyle = "white"
    ctx.lineWidth = 12

    ctx.shadowBlur=20
    ctx.shadowColor="white"

    ctx.stroke()

    for(var i=0;i<3;i++){
    ctx.lineWidth=5
    ctx.beginPath()
    ctx.moveTo(0,0)
    ctx.lineTo(0,-ship.r)
    ctx.stroke()
    ctx.rotate(Math.PI*2/3)
    }


  ctx.restore()


  // class Bullet{
  //   constructor(args){
  //     let def={
  //       x:0,
  //       y:0,
  //       v:{
  //         x:0,
  //         y:0
  //       }
  //     }
  //     object.assign(def,args)
  //     object.assign(this,def)
  //   }
  //   update(){
  //     this.x+=this.v.x
  //     this.y+=this.v.y
  //   }
  //   draw(){
  //     ctx.save()
  //       ctx.translate(this.x,this.y)
  //       ctx.fillStyle="white"
  //       ctx.fillRect(0,0,10,10)
  //     ctx.restore()
  //   }
  // }

  // var b = new Bullet()

  // function init(){
  //   b = new Bullet({
  //     x:50,
  //     y:50
  //   })
  // }

  ctx.fillRect(ship.x, ship.y, 50, 50)

  requestAnimationFrame(draw)
}

init()
setInterval(update, 30)
requestAnimationFrame(draw)

var MousePos={
  x:0,
  y:0
}
canvas.addEventListener("mousemove",function(evt
){
  // console.log(evt.x,evt.y)
  MousePos.x=evt.x
  MousePos.y=evt.y
})












// var time = 0
// var ship = {
//   deg: 0
// } 

// function init(){
//   canvas.width = ww
//   canvas.height = wh
// }
// function update(){
//   ctx.fillStyle="black"
//   ctx.fillRect(0,0,ww,wh)
//   time++
// }
// function draw(){
//   ctx.fillStyle="#001D2E"
//   ctx.fillRect(0,0,ww,wh)

//   ctx.save()
//     ctx.strokeStyle="rgba(255,255,255,0.1)"
//     let gutter = 50
//     for(var i=0;i*10<ww;i++){
//       ctx.moveTo(i*gutter,0)
//       ctx.lineTo(i*gutter,wh)
//     }
//     for(var i=0;i*10<wh;i++){
//       ctx.moveTo(0,i*gutter)
//       ctx.lineTo(ww,i*gutter)
//     }
//     ctx.stroke()

//   ctx.restore()

//   ctx.save()
//     ctx.shadowBlur=50
//     ctx.shadowColor="white"

//     ctx.translate(ww/2,wh/2)
//     ctx.beginPath()
//     ctx.arc(0,0,80,0,Math.PI*2)
//     ctx.strokeStyle="white"
//     // ctx.fillStyle="white"
//     ctx.lineWidth=15
//     ctx.stroke()
//     for(var i=0;i<3;i++){
//       ctx.rotate(Math.PI*2/3)
//       ctx.moveTo(0,0)
//       ctx.lineTo(80,0)
//     }

//     ctx.lineWidth=5
//     ctx.stroke()

//     ctx.beginPath()
//     if (time%50==0){
//       TweenMax.to(ship,0.5,{deg: time/20})
//       // ship.deg = time/20
//     }
//     ctx.arc(0,0,150,-Math.PI/4+ ship.deg ,Math.PI/4+ship.deg )
//     ctx.stroke()

//     ctx.save()
//       ctx.rotate(ship.deg + Math.PI)
//       ctx.beginPath()
//       ctx.fillStyle="white"
//       ctx.fillRect(100,-25,50,50)

//       ctx.stroke()
//     ctx.restore()

//   ctx.restore()

//   let r = 300
//   let deg = time/60
//   ctx.save()
//     ctx.translate(ww/2,wh/2)
//     ctx.beginPath()
//     ctx.arc(Math.cos(deg)*r,Math.sin(deg)*r,40,0,Math.PI*2)
//     ctx.fillStyle="white"
//     ctx.fill()
//   ctx.restore()


//   requestAnimationFrame(draw)
// } 
// init()
// setInterval(update,30)
// requestAnimationFrame(draw)

// class GameObject{
//   constructor(args){
//     let def ={
//     }
//   }
//   draw(){

//   }
//   update(){

//   }
// }


