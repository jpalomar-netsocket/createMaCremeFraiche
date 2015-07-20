// require config... duh
requirejs.config({
    // initial pwd is /assets/
    'baseUrl': '/assets/',
    'paths': {
        // libs
        'jquery': [
            '//ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min',
            'libs/jquery/dist/jquery.min',   // prod backup
            'libs/jquery/dist/jquery',   // backup
        ],
        'bootstrap': [
            '//maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min',
            'libs/bootstrap-sass/assets/javascripts/bootstrap.min',   // prod backup
            'libs/bootstrap-sass/assets/javascripts/bootstrap',   // backup
        ],
        'underscore': [
            '//cdnjs.cloudflare.com/ajax/libs/underscore.js/1.8.3/underscore-min',
            'libs/underscore/underscore-min', // prod backup
            'libs/underscore/underscore', // backup
        ],
        'd3': [
            '//cdnjs.cloudflare.com/ajax/libs/d3/3.5.5/d3.min',
            'libs/d3/d3.min',                // prod backup
            'libs/d3/d3',                // backup
        ],
        'modernizr': [
            '//cdnjs.cloudflare.com/ajax/libs/modernizr/2.8.3/modernizr.min',
            'libs/modernizr/modernizr',  // backup
        ],
        'ga': 'js/ga',
        // modules
        // 'jquery-ext': '../../assets/custom_components/jquery-extensions',
    },
    'shim': {
        // require jquery when requiring bootstrap
        'bootstrap': {
            'deps': ['jquery'],
            // returns back the window.jQuery object
            'exports': 'jQuery'
        },
        // require underscore when requiring underscore.string extensions
        'underscore.string': {
            'deps': ['underscore'],
            // returns back the window._ object
            'exports': '_'
        },
        'modernizr': {
            'exports': 'Modernizr'
        }
    }
});

// start loading modules
requirejs([
    'modernizr',
    'ga',
    'js/mcf',
]);
