! function () {
    var duration = 50
    $('.actions').on('click', 'button', function (e) {
        let $button = $(e.currentTarget) // button
        let speed = $button.attr('data-speed')
        $button.addClass('active')
            .siblings('.active').removeClass('active')
        switch (speed) {
            case 'slow':
                duration = 100
                break;
            case 'narmal':
                duration = 50
                break;
            case 'fast':
                duration = 1
                break;
        }
    })

    function writeCode(prefix, code, fn) {
        let container = document.querySelector('#code')
        let styleTag = document.querySelector('#styleTag')

        var n = 0

        setTimeout(function run() {
            n += 1
            container.innerHTML = code.substring(0, n)
            styleTag.innerHTML = code.substring(0, n)
            container.innerHTML = Prism.highlight(prefix + code.slice(0, n), Prism.languages.css, 'css');
            container.scrollTop = container.scrollHeight
            if (n < code.length) {
                setTimeout(run, duration)
            } else {
                fn && fn.call()
            }
        }, duration)
    }

    let code = `

/*
*你好！HR，我叫青林，希望应聘Web前端工程
*下面我来展示下制作pikachu 的过程
*/
.wrpper{
    width:100%;
    height:165px;
    position:relative;
  }
/*
*首先画皮卡丘的头
*/
.head{
  height: 390px;
  width: 380px;
  background: #FFD823;
  border-radius: 290px 290px 520px 520px;
  position: absolute;
  left:50%;
  transform:translateX(-50%);
  top:50%;
  margin-top:-180px;
  z-index:-1;
  border:1px solid red;
}
/*再画皮卡丘的耳朵*/
/*右耳*/
.left-ear{
 background-color: #FFD823;
 width: 90px;
 height: 300px;
 border-radius: 100%;
 box-shadow: inset 1px 20px 0 #000;
 position: absolute;
 top: -60px;
 left: 84px;
 top:-300px;
 transform: rotate(40deg);
}
/*左耳*/
.right-ear{
 background-color: #FFD823;
 width: 90px;
 height: 300px;
 border-radius: 100%;
 box-shadow: inset -1px 15px 0 #000;
 position: absolute;
 top: -60px;
 right: 84px;
 top:-300px;
 transform: rotate(-40deg);
}
/*
*然后画鼻子
*/
.nose{
    width:0px;
    height:0px;
    border-style:solid;
    border-width: 12px;
    border-radius: 50%;
    border-color:black transparent transparent transparent;
    position:absolute;
    left: 50%;
    top: 28px;
    transform:translateX(-50%)
  }
/*
*画眼睛
*/
.eye{
    width:49px;
    height:49px;
    background:#2E2E2E;
    position:absolute;
    border-radius:50%;
    border:4px solid black;
  }
/*画眼珠子*/
.eye::before{
    content:'';
    display:block;
    width: 25px;
    height: 25px;
    background:white;
    border-radius:50%;
    position:absolute;
    left:3px;
    top:-1px;
    border:2px solid black;  
  }
/*画左眼*/
.eye.left{
    right:50%;
    margin-right:90px;
  }
/*画右眼*/  
.eye.right{
    left:50%;
    margin-left:90px;
  }
/*画脸颊*/
.face{
    width:68px;
    height:68px;
    background:#FC0D1C;
    border:2px solid black;
    border-radius:50%;
    position:absolute;
  }
.face.left{
    top:85px;
    right:50%;
    margin-right:116px;
  }
.face.right{
    top:85px;
    left:50%;
    margin-left:116px;
  }
/**画上嘴唇*/
.upperlip{
    width:80px;
    height:30px;
    top:45px;
    border-style:solid;
    border-width:3px;
    border-color:black;
    border-top:none;
    position:absolute;
    background: #FFD823;
  }
.upperlip.left{
    right:50%;
    transform:rotate(-20deg);
    border-right:none;
    border-bottom-left-radius:40px 25px;
  }
.upperlip.right{
     left:50%;
     transform:rotate(20deg);
     border-left:none;
    border-bottom-right-radius:40px 25px;
    
  }
/*画下嘴唇*/
.lowerlip-wrpper{
    width:300px;
    height:110px;
    position:absolute;
    bottom:0;
    left:50%;
    transform:translateX(-50%);
    z-index:-1;  
    overflow:auto;
  }
.lowerlip{
    width:300px;
    height:3500px;
    background:#990513;
    border-radius:200px/2000px;
    border:2px solid black;
    position:absolute;
    bottom:0;
    overflow:hidden;
  }
/*画舌头*/
.lowerlip::after{
    content:'';
    width:100px;
    height:80px;
    background:#FC4A62;;
    border-radius:50px/40px;
    position:absolute;
    bottom:0;
    left:50%;
    transform:translateX(-50%);
  }
    `
    writeCode('', code)

}.call()