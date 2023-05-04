const filterProperties = require("./filterProperties.js");  
const properties = require("./properties.json");

describe("filterProperties", () => {
    it("should filter out private properties", () => {
      
        const result = filterProperties(properties);
        const expected = [properties[0], properties[2]];


        expect(result).toEqual(expected);
    });
});
    
