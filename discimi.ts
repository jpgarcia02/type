interface square{
    size:number,

}

interface rectangle{
    height: number,
}

interface circle{
    radius: number,
}

type sahpe = square | rectangle | circle;

function printC(shap : sahpe){
    if("size" in shap){
        shap.size;
        
    }
}