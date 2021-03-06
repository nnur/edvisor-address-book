describe('json reader', function() {

    // Store a local reference to the service being tested
    var jsonReader;

    beforeEach(module('addbook.common.jsonReader'));

    beforeEach(function() {
        inject(function($injector) {
            // Mock the backend handeling REST operations
            $httpBackend = $injector.get('$httpBackend');
            $httpBackend.when('GET', '/path').respond('testResponse');
        });
    });

    beforeEach(inject(function(_jsonReader_) {
        jsonReader = _jsonReader_;
    }));


    it('should get the JSON data', function(done) {
        jsonReader.getJsonData('/path').then(function(res) {
            expect(res.data).toEqual('testResponse');
            done();
        });
        $httpBackend.flush();
    });
});
