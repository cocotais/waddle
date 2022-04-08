var key = `
    AUTHOR BY LIULYXANDY
    恭喜找到了通关密钥！没错，马上你将进行一个小游戏，通过就可查看彩蛋）））
    ./start.html
`
function chkkey(key) {
    if (key = "zzxnb") {
        alert("zzxnb!")
        win("mathcalculusnb")
    }
    else {
        alert("ERROR!ERROR!")
        window.close()
    }
}
function win(auth) {
    if (auth = "mathcalculusnb") {
        alert("成功通关!")
        window.open("./win.html")
    }
    else {
        alert("Auth is not correct.")
        window.close()
    }
}