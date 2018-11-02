var Migrations = artifacts.require("./Migrations.sol");
//引入自定义合约
var Test = artifacts.require("./Test.sol");

module.exports = function(deployer) {
  deployer.deploy(Migrations);
  //部署引入的自定义合约
  deployer.deploy(Test);
};
