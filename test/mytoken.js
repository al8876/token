var MyToken = artifacts.require("./MyToken.sol");
let HST;


//  For more information on bignumber.js search here: https://github.com/MikeMcl/bignumber.js/

contract('MyToken', function(accounts) {

  beforeEach(async () => {
    HST = await MyToken.new(10000, 'Alex Coin', 1, 'ALC');
  });

  it("should assert true", function(done) {
    var mytoken = MyToken.deployed();
    assert.isTrue(true);
    done();
  });

  it('creation: should create an initial balance of 10000 for the creator', async () => {
    const balance = await HST.balanceOf.call(accounts[0]);
    assert.strictEqual(balance.toNumber(), 10000);
  });

  it("send funds of 5000 tokens to the contract from a second account and that account 0 has 5000 less tokens", async () => {
    await HST.transfer(accounts[1], 5000, {from: accounts[0]});
    const balance = await HST.balanceOf.call(accounts[1]);
    assert.strictEqual(balance.toNumber(),5000);

    const balanceOfOwner = await HST.balanceOf.call(accounts[0]);
    assert.strictEqual(balanceOfOwner.toNumber(),5000);
    
    await HST.transfer(accounts[2], 100, {from: accounts[1]});
    const balanceOfAccount2 = await HST.balanceOf.call(accounts[2]);
    assert.strictEqual(balanceOfAccount2.toNumber(),100);
  });

});