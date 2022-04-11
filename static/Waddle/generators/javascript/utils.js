//ooooooooo@^ ... @OooO\.]]/@oo@@@@@oO@ ... @@^****
//oooooooOOO^ ... @OooO@@@OoooooOOOooO^ ...=@@^****
//ooooooOOoO@  .. @@Oooooo@OoO@OoooOOO^ ...@O@\****
//OOOOOOOOOO@` .. @OOOOoooOoooO@@@Ooo@^.../@OO@***,
//OOOOOOOOOOO\ .. @OoooooooooooooO@OO@^..=@OOO@*,O[
//OOOOOOOOOOO@`.. @OOO@@@@@@@@@@@@@@O@^..@OOOO@**,]
//@@@@@OOOOOOO\ ,//`               .[\@`/@OOO@@^,[*
//@@@@@@@@@OOO@/.                      .\@O@Oo@^O@o
//@@@@@@OOOO@/ =@@`                    .. =@OO@^***
//@@OOOOOOO@`  ,[[      =^            =@@^ .@O@\*,]
//@O@OOOOO@` ......    ,/  =\  .@           .@O\[,*
//@O@OOOO@^          [[.[O/[,@@@`    ....... =@,[[*
//@O@O\OO@^                                  =@O@@o
//@@@@@@@@`                                  =@@@@o
//O@OO,\`O^                                  @O*`/\
//\O@/[`/@@^        /@]]                    /O=O/OO
//****`=OO@@@`..../@o/ooO@.           ....,@/,,[[[*
//],`****,`\`\@@@@O/o\ooO@............,]@@/]`]]]]]]
//OO@O\*^*`**]O\./@oO@Oo@@]]]]/O@@@@@@OOOOOOOOOOOOO
//OOO\/*,]]ooOO@OOOO@@@@/........    =@[[[[[`******
//,]oOOOO@@@@O/\@@OOO@@`           @[\@O@\******`**
//@@/[[`******=@Oo@O@@^            @@O@@@@O@@[O//\@
//*****]=O,O^*O@O@@@O@            .@@@@@OO@@@@\@O`/
//*****\o^[***,O@@@/[@@@@@@@@@@@@@@[[@@@O@@@/,`,*[`
//**************]/OOO@^  =@OO@` ./@OOOOO@/*********
//                 于勤保佑 无bug

Blockly.JavaScript['utils_import'] = function (block) {
    var code = `const utils = require('utils');\n`;
    return code;
};

Blockly.JavaScript['utils_isnative'] = function (block) {
    // TODO: Assemble JavaScript into code variable.
    var code = 'utils.isNative()';
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.JavaScript.ORDER_NONE];
};