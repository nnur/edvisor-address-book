// Top level module
angular.module('addbook.components.main', ['addbook.common.jsonReader'])
    .controller('MainController', ['jsonReader', 'baseURL', MainController]);
