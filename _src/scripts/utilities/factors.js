export function factorsPieCreator( roleSplit ){
    console.log( roleSplit );
    var managerial = roleSplit.managerial;
    var creative = managerial + roleSplit.creative;
    var technical = creative + roleSplit.technical;
    console.log({managerial, creative, technical});
    // http://thenewcode.com/482/Placing-Text-on-a-Circle-with-SVG
    return 'background-image: conic-gradient(#ADD3FF ' + managerial +'%, #739AC6 ' + managerial + '%, #739AC6 ' + creative + '%, #C7A973 ' + creative + '%);';
}