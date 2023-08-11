import Blockly from "blockly"; //ooooooooo@^ ... @OooO\.]]/@oo@@@@@oO@ ... @@^****
import { javascriptGenerator } from "blockly/javascript";
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

javascriptGenerator.forBlock["lodash_import"] = function () {
  var code = `const lodash = require('lodash');\n`;
  return code;
};

javascriptGenerator.forBlock["lodash_chunk"] = function (block) {
  var array = javascriptGenerator.valueToCode(block, "ARRAY", javascriptGenerator.ORDER_NONE) || "[]";
  var size = javascriptGenerator.valueToCode(block, "SIZE", javascriptGenerator.ORDER_NONE) || "1";
  let code = `lodash.chunk(${array}, ${size})`;
  return [code, javascriptGenerator.ORDER_NONE];
};

javascriptGenerator.forBlock["lodash_compact"] = function (block) {
  var array = javascriptGenerator.valueToCode(block, "ARRAY", javascriptGenerator.ORDER_NONE) || "[]";
  let code = `lodash.compact(${array})`;
  return [code, javascriptGenerator.ORDER_NONE];
};

javascriptGenerator.forBlock["lodash_concat"] = function (block) {
  var array = javascriptGenerator.valueToCode(block, "ARRAY", javascriptGenerator.ORDER_NONE) || "[]";
  var value = javascriptGenerator.valueToCode(block, "VALUE", javascriptGenerator.ORDER_NONE) || "1";
  let code = `lodash.concat(${array}, ${value})`;
  return [code, javascriptGenerator.ORDER_NONE];
};

javascriptGenerator.forBlock["lodash_difference"] = function (block) {
  var array = javascriptGenerator.valueToCode(block, "ARRAY", javascriptGenerator.ORDER_NONE) || "[]";
  var value = javascriptGenerator.valueToCode(block, "VALUE", javascriptGenerator.ORDER_NONE) || "[]";
  let code = `lodash.difference(${array}, ${value})`;
  return [code, javascriptGenerator.ORDER_NONE];
};

javascriptGenerator.forBlock["lodash_differencebydropdown"] = function (block) {
  var array = javascriptGenerator.valueToCode(block, "ARRAY", javascriptGenerator.ORDER_NONE) || "[]";
  var value = javascriptGenerator.valueToCode(block, "VALUE", javascriptGenerator.ORDER_NONE) || "[]";
  var mode = block.getFieldValue("ITERATEE");
  let code = `lodash.differenceBy(${array}, ${value}, ${mode})`;
  return [code, javascriptGenerator.ORDER_NONE];
};

javascriptGenerator.forBlock["lodash_differenceby"] = function (block) {
  var array = javascriptGenerator.valueToCode(block, "ARRAY", javascriptGenerator.ORDER_NONE) || "[]";
  var value = javascriptGenerator.valueToCode(block, "VALUE", javascriptGenerator.ORDER_NONE) || "[]";
  var mode = block.getFieldValue("ITERATEE");
  let code = `lodash.differenceBy(${array}, ${value}, ${mode})`;
  return [code, javascriptGenerator.ORDER_NONE];
};

javascriptGenerator.forBlock["lodash_differencewithdropdown"] = function (block) {
  var array = javascriptGenerator.valueToCode(block, "ARRAY", javascriptGenerator.ORDER_NONE) || "[]";
  var value = javascriptGenerator.valueToCode(block, "VALUE", javascriptGenerator.ORDER_NONE) || "[]";
  var mode = block.getFieldValue("COMPARATOR");
  let code = `lodash.differenceWith(${array}, ${value}, ${mode})`;
  return [code, javascriptGenerator.ORDER_NONE];
};

javascriptGenerator.forBlock["lodash_differencewith"] = function (block) {
  var array = javascriptGenerator.valueToCode(block, "ARRAY", javascriptGenerator.ORDER_NONE) || "[]";
  var value = javascriptGenerator.valueToCode(block, "VALUE", javascriptGenerator.ORDER_NONE) || "[]";
  var mode = block.getFieldValue("COMPARATOR");
  let code = `lodash.differenceWith(${array}, ${value}, ${mode})`;
  return [code, javascriptGenerator.ORDER_NONE];
};

javascriptGenerator.forBlock["lodash_drop"] = function (block) {
  var array = javascriptGenerator.valueToCode(block, "ARRAY", javascriptGenerator.ORDER_NONE) || "[]";
  var value = javascriptGenerator.valueToCode(block, "VALUE", javascriptGenerator.ORDER_NONE) || "0";
  let code = `lodash.drop(${array}, ${value})`;
  return [code, javascriptGenerator.ORDER_NONE];
};

javascriptGenerator.forBlock["lodash_dropright"] = function (block) {
  var array = javascriptGenerator.valueToCode(block, "ARRAY", javascriptGenerator.ORDER_NONE) || "[]";
  var value = javascriptGenerator.valueToCode(block, "VALUE", javascriptGenerator.ORDER_NONE) || "0";
  let code = `lodash.dropRight(${array}, ${value})`;
  return [code, javascriptGenerator.ORDER_NONE];
};

javascriptGenerator.forBlock["lodash_dropwhiledropdown"] = function (block) {
  var array = javascriptGenerator.valueToCode(block, "ARRAY", javascriptGenerator.ORDER_NONE) || "[]";
  var pre = block.getFieldValue("PRE");
  let code = `lodash.dropWhile(${array}, ${pre})`;
  return [code, javascriptGenerator.ORDER_NONE];
};

javascriptGenerator.forBlock["lodash_droprightwhiledropdown"] = function (block) {
  var array = javascriptGenerator.valueToCode(block, "ARRAY", javascriptGenerator.ORDER_NONE) || "[]";
  var pre = block.getFieldValue("PRE");
  let code = `lodash.dropRightWhile(${array}, ${pre})`;
  return [code, javascriptGenerator.ORDER_NONE];
};

javascriptGenerator.forBlock["lodash_dropwhile"] = function (block) {
  var array = javascriptGenerator.valueToCode(block, "ARRAY", javascriptGenerator.ORDER_NONE) || "[]";
  var pre = block.getFieldValue("PRE");
  let code = `lodash.dropWhile(${array}, ${pre})`;
  return [code, javascriptGenerator.ORDER_NONE];
};

javascriptGenerator.forBlock["lodash_droprightwhile"] = function (block) {
  var array = javascriptGenerator.valueToCode(block, "ARRAY", javascriptGenerator.ORDER_NONE) || "[]";
  var pre = block.getFieldValue("PRE");
  let code = `lodash.dropRightWhile(${array}, ${pre})`;
  return [code, javascriptGenerator.ORDER_NONE];
};

javascriptGenerator.forBlock["lodash_fill"] = function (block) {
  var array = javascriptGenerator.valueToCode(block, "ARRAY", javascriptGenerator.ORDER_NONE) || "[]";
  var num1 = javascriptGenerator.valueToCode(block, "NUM1", javascriptGenerator.ORDER_NONE) || "0";
  var num2 = javascriptGenerator.valueToCode(block, "NUM2", javascriptGenerator.ORDER_NONE) || "0";
  var value = javascriptGenerator.valueToCode(block, "VALUE", javascriptGenerator.ORDER_NONE) || "numm";
  let code = `lodash.fill(${array}, ${value}, ${num1}, ${num2})`;
  return [code, javascriptGenerator.ORDER_NONE];
};

javascriptGenerator.forBlock["lodash_findindex"] = function (block) {
  var array = javascriptGenerator.valueToCode(block, "ARRAY", javascriptGenerator.ORDER_NONE) || "[]";
  var pre = block.getFieldValue("PRE");
  let code = `lodash.findIndex(${array}, ${pre})`;
  return [code, javascriptGenerator.ORDER_NONE];
};

javascriptGenerator.forBlock["lodash_findlastindex"] = function (block) {
  var array = javascriptGenerator.valueToCode(block, "ARRAY", javascriptGenerator.ORDER_NONE) || "[]";
  var pre = block.getFieldValue("PRE");
  let code = `lodash.findLastIndex(${array}, ${pre})`;
  return [code, javascriptGenerator.ORDER_NONE];
};

javascriptGenerator.forBlock["lodash_findindexdropdown"] = function (block) {
  var array = javascriptGenerator.valueToCode(block, "ARRAY", javascriptGenerator.ORDER_NONE) || "[]";
  var pre = block.getFieldValue("PRE");
  let code = `lodash.findIndex(${array}, ${pre})`;
  return [code, javascriptGenerator.ORDER_NONE];
};

javascriptGenerator.forBlock["lodash_findlastindexdropdown"] = function (block) {
  var array = javascriptGenerator.valueToCode(block, "ARRAY", javascriptGenerator.ORDER_NONE) || "[]";
  var pre = block.getFieldValue("PRE");
  let code = `lodash.findLastIndex(${array}, ${pre})`;
  return [code, javascriptGenerator.ORDER_NONE];
};

javascriptGenerator.forBlock["lodash_first"] = function (block) {
  var array = javascriptGenerator.valueToCode(block, "ARRAY", javascriptGenerator.ORDER_NONE) || "[]";
  let code = `lodash.first(${array})`;
  return [code, javascriptGenerator.ORDER_NONE];
};

javascriptGenerator.forBlock["lodash_flatten"] = function (block) {
  var array = javascriptGenerator.valueToCode(block, "ARRAY", javascriptGenerator.ORDER_NONE) || "[]";
  let code = `lodash.flatten(${array})`;
  return [code, javascriptGenerator.ORDER_NONE];
};

javascriptGenerator.forBlock["lodash_flattendeep"] = function (block) {
  var array = javascriptGenerator.valueToCode(block, "ARRAY", javascriptGenerator.ORDER_NONE) || "[]";
  let code = `lodash.flattenDeeth(${array})`;
  return [code, javascriptGenerator.ORDER_NONE];
};
