function a(){
    function b(){
        function c(){
            console.log(name);
        }
        c();
    }
    b();
}

var name =  'Rakesh';
a();