fetch('https://gist.githubusercontent.com/Steffan153/860aa37d224aeb8ac37a1b2e7b5c5c5f/raw/knight.js').then(x => x.text()).then(eval);

DSO.defineMode('knight', (code,input,args,output,debug) => {
    try {
        let result = Knight.run(code, input.split("\n"));
        output(result);
    } catch (ex) {
        debug(ex);
    }
});
