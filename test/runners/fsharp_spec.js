var expect = require('chai').expect;
var runner = require('../runner');


describe( 'fsharp runner', function(){
    describe( '.run', function(){
        it( 'should handle basic code evaluation', function(done){
            runner.run({language: 'fsharp', code: 'printfn "42"'}, function(buffer) {
                expect(buffer.stdout).to.equal('42\n');
                done();
            });
        });
    });
});
