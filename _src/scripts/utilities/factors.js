export function factorsPieCreator( roleSplit ){
    console.log( roleSplit );
    var managerial = roleSplit.managerial;
    var creative = managerial + roleSplit.creative;
    var technical = creative + roleSplit.technical;
    console.log({managerial, creative, technical});
    // http://thenewcode.com/482/Placing-Text-on-a-Circle-with-SVG#:~:text=Placing%20Text%20on%20a%20Circle%20with%20SVG%20Updated,own%20specialized%20element%20for%20achieving%20the%20effect%3A%20textpath.
    return 'background-image: conic-gradient(#ADD3FF ' + managerial +'%, #739AC6 ' + managerial + '%, #739AC6 ' + creative + '%, #C7A973 ' + creative + '%);';
}