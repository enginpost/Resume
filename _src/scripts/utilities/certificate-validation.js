export function validCertURL( thisURL, thisTitle ){
    if ( thisURL.length > 0 ){
        return `<a href="${thisURL}" title="View certificate">${thisTitle}</a>`;
    }else{
        return `<span title="No viewable certificate">${thisTitle}</span>`
    }
}