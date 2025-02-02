function a() {
    var c = 100;
    b()
    function b() {
        console.log(c);

    }
}
a()