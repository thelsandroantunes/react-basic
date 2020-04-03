
import {NativeModules} from "react-native";


var ToastExample = NativeModules.ToastExample;

const gertecReact = {
  codeBarEan8: async function () {
    return await ToastExample.startCameraV1("EAN 8");
  },
  codeBarEan13: async function () {
    return await ToastExample.startCameraV1("EAN 13");
  },
  codeBarEan14: async function () {
    return await ToastExample.startCameraV1("EAN 14");
  },
  codeBarQrCode: async function () {
    return await ToastExample.startCameraV1("QRCODE");
  },
  codeBarV2: async function () {
    return await ToastExample.startCameraV2();
  },
  nfcId: async function () {
    return await ToastExample.nfcId();    
  },
  nfcGedi: async function () {
    return await ToastExample.nfcGedi();    
  },
  printText: async function (paramText, paramLanguage, paramLanguage2, paramSize,paramToggle, paramToggle2, paramToggle3, paramAlign) {
    return await ToastExample.imprimeTexto(paramText,paramLanguage,parseInt(paramLanguage2,paramSize),paramToggle,paramToggle2,paramToggle3,paramAlign);
  },
  printBarCode: async function(paramText, paramHeight, paramSize, paramWidth, paramSize2, paramType){
    return await ToastExample.imprimeBarCode(paramText,parseInt(paramHeight,paramSize),parseInt(paramWidth,paramSize2),paramType);
  },
  printImage: async function () {
    return await  ToastExample.imprimeImagem();
  },
  printAll: async function () {
    return await ToastExample.imprimeTudo();
  },
  printerStatus: async function () {
    return await ToastExample.statusImpressora();
  }
}

export default gertecReact;
