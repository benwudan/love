

var a='[{"id":10,"key":10,"title":"理想阳光创意园-总经理","date":"2019-06-01 14:25:25","children":[{"id":20,"key":20,"title":"财务部","date":"2019-06-01 14:26:28","children":[]},{"id":21,"key":21,"title":"副总经理-生产/技术","date":"2019-06-01 14:23:45","children":[{"id":301,"key":301,"title":"设备部","date":"2019-06-01 14:29:17"},{"id":302,"key":302,"title":"技术部","date":"2019-06-01 14:20:27"},{"id":303,"key":303,"title":"质检部","date":"2019-06-01 14:27:43"},{"id":304,"key":304,"title":"生产部","date":"2019-06-01 14:30:23"},{"id":305,"key":305,"title":"办公室","date":"2019-06-01 14:29:05"}]},{"id":22,"key":22,"title":"副总经理-销售/供应","date":"2019-06-01 14:25:36","children":[{"id":306,"key":306,"title":"供应部","date":"2019-06-01 14:24:47"},{"id":307,"key":307,"title":"外协部","date":"2019-06-01 14:27:01"},{"id":308,"key":308,"title":"销售部","date":"2019-06-01 14:24:02"},{"id":309,"key":309,"title":"电商部","date":"2019-06-01 14:28:21"}]}]}]';

var b=JSON.parse(a);

console.log(b)

var dict={};

function recrGetChildren(a){
    
    if(a instanceof Array){
        if(a.length==0){
            return;
        }
        for (var k in a){
            let keyObject=a[k];
            if(keyObject.hasOwnProperty("children")){
                dict[keyObject.key]=keyObject.children;
                recrGetChildren(keyObject.children)
            }else{
                dict[keyObject.key]=[];
            }
        }
    }
}


recrGetChildren(b)

console.log(dict)



