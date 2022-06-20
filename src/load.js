export function loadScript(obj, callback = false) {
    let elsType = typeof obj,
        element, 
        loadedScripts = parseScripts();

    switch (elsType) {
        case 'string': 
            if (obj && loadedScripts.includes(obj)) {
                console.log(obj + 'is already loaded');
                return;
            }
            element = createScriptURL(obj, callback);
            document.body.appendChild(element);
        break;
        case 'object': 
            obj.forEach((url)=>{
                if (url && loadedScripts.includes(url)) {
                    console.log(url + 'is already loaded')
                } else {
                    let el = createScriptURL(url, false);
                    document.body.appendChild(el);
                }
            });
            if(callback) {
                callback.call();
            }
        break;
        case 'function': 
            obj.call();
        break;
    }    

}

function createScriptURL(url, callback = false) {
    const element = document.createElement("script");
    element.type = "text/javascript";
    element.src = url;
    if (callback) {
        element.onload = callback;
    }
    
    return element;
}

function parseScripts(){
    let scripts = document.querySelectorAll('script'), 
        srcs = [];
        scripts.forEach(el=>{
            if(el.src){
                srcs.push(el.src);
            }            
        });
    return srcs;
}