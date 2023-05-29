// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

//PHONE NUMBERS
test('Tests invalid phone number', () => {
    expect(functions.isPhoneNumber('6198638406')).toBe(false);
});

test('Tests invalid phone number', () => {
    expect(functions.isPhoneNumber('123456789123')).toBe(false);
});

test('Tests valid phone number', () => {
    expect(functions.isPhoneNumber('619-863-8406')).toBe(true);
});

test('Tests valid phone number', () => {
    expect(functions.isPhoneNumber('123-456-7891')).toBe(true);
});

//EMAILS
test('Tests valid email', () => {
    expect(functions.isEmail('noah@gmail.com')).toBe(true);
});

test('Tests valid email', () => {
    expect(functions.isEmail('hello@gmail.com')).toBe(true);
});

test('Tests invalid email', () => {
    expect(functions.isEmail('noah@@@@gmail.com')).toBe(false);
});

test('Tests invalid email', () => {
    expect(functions.isEmail('gmail.com')).toBe(false);
});

//PASSWORDS
test('Tests valid password', () => {
    expect(functions.isStrongPassword('noah123')).toBe(true);
});

test('Tests valid password', () => {
    expect(functions.isStrongPassword('hellothere')).toBe(true);
});

test('Tests invalid password', () => {
    expect(functions.isStrongPassword('hi')).toBe(false);
});

test('Tests invalid password', () => {
    expect(functions.isStrongPassword('waytoolongofapassword')).toBe(false);
});

//DATES
test('Tests valid date', () => {
    expect(functions.isDate('1/2/3456')).toBe(true);
});

test('Tests valid date', () => {
    expect(functions.isDate('08/15/2003')).toBe(true);
});

test('Tests invalid date', () => {
    expect(functions.isDate('12')).toBe(false);
});

test('Tests invalid date', () => {
    expect(functions.isDate('12/34/56/78')).toBe(false);
});

//HEX COLOR
test('Tests valid hex color', () => {
    expect(functions.isHexColor('#FFFFFF')).toBe(true);
});

test('Tests valid hex color', () => {
    expect(functions.isHexColor('#123456')).toBe(true);
});

test('Tests invalid hex color', () => {
    expect(functions.isHexColor('#1')).toBe(false);
});

test('Tests invalid hex color', () => {
    expect(functions.isHexColor('#hello')).toBe(false);
});

