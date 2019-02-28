var expect = require('chai').expect;
var should = require('chai').should();

import Venta from '../Venta.js'

describe('Venta', function(){
    it('Total de venta sin producto deberia ser 0',function(){
        let venta = new Venta();
        expect(venta.total()).equal(0);
    });
});