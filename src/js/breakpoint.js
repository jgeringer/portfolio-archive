export function refreshValue(){
    window.bpValue = window.getComputedStyle(document.querySelector('body'), ':before').getPropertyValue('content').replace(/\"/g, '');
    return bpValue;
}

export function isMobile(){
    if (refreshValue() == 'bpSmall') {
        return true;
    } else {
        return false;
    }
}

export function bpChange(){
    var currBpValue = window.bpValue;
    
    console.log('refreshValue.bpValue:' + refreshValue() + " | currBpValue: " + currBpValue);
    
    if (window.bpValue != currBpValue) {
        return true;
    } else {
        //console.log('same!');
        return false;
    }
}