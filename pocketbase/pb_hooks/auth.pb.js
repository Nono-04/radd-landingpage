// / <reference path="../pb_data/types.d.ts" />

routerAdd ('GET', 'checkUsername/:username', function (context) {

    let username = context.pathParam ('username');

    if (username.length < 3) {
        return context.json (400, {'message': 'Username must be at least 3 characters long'});
    }

    if (username.length > 20) {
        return context.json (400, {'message': 'Username must be at most 20 characters long'});
    }

    if (! username.match (/^[a-zA-Z0-9]+$/)) {
        return context.json (400, {'message': 'Username must contain only letters and numbers'});
    }

    try {
        const user = $app.dao () ?. findAuthRecordByUsername ('users', username);
        if (user != null) {
            return context.json (400, {'message': 'Username is already taken'});
        }
    } catch (e) {}

    return context.json (200, {'message': 'Username is available'});
});

routerAdd ('GET', 'checkEmail/:email', function (context) {

    let email = context.pathParam ('email');

    if (!email.match (/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)) {
        return context.json (400, {'message': 'Invalid email address'});
    }

    try {
        const user = $app.dao () ?. findAuthRecordByEmail ('users', email);
        if (user != null) {
            return context.json (400, {'message': 'Email address is already in use'});
        }
    } catch (e) {}

    return context.json (200, {'message': 'Email address is available'});
});
