var route = get('route').then(d => route = d.route);
//This will do the bus Route task
function keycode(sc) {
    routenumber = sc.toUpperCase() + String(route.sn['route' + sc.toUpperCase()])
    H = String(route.sn[sc + "h"])
    M = String(route.sn[sc + "m"])
    if (M.length === 1) {
        M = "0" + M
    }
    Time = H + ":" + M;
    append(new textclass("The route number is: " + routenumber + "\nThe Time is: " + Time).createClientSide());
}

function routeofstop(e) {
    for (var i = 0; i != route.route.length; i++) {
        var SN = route.route[i];
        if (SN['stopName'] === e) {
            changeall('#myInput', 'disabled', true);
            document.getElementsByClassName('dropdown-content')[0].remove()
            document.querySelector('#option-typer').removeAttribute('disabled');
            changeall('#option-typer', 'placeholder', 'Type the options instead...');
            route.sn = route.route[i];
            keycode('a');
            keycode('b');
            keycode('d');
            keycode('e');
            run()
            return 0;
        }
    }
}