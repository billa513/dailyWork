

var global:number=10;
class Scopes {
    static staticValue:number=20;
    instanceValue=30;
    display(): void{
        var localValue: number=40;
        console.log('Local:' + localValue);
        console.log('Instance:' +this.instanceValue);
        console.log('Static:' + Scopes.staticValue);
        console.log('global:' + global);

    }
   
}
var obj=new Scopes();
obj.display();

