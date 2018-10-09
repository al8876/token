var Migrations = artifacts.require("./Migrations.sol");
var MyToken = artifacts.require("./MyToken.sol");

module.exports = function(deployer) {
  deployer.deploy(Migrations);
  deployer.deploy(MyToken,10000,'MyToken',2,'MYT');
};