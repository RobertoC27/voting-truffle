var Voting = artifacts.require('Voting')
module.exports = function(deployer) {
  deployer.deploy(Voting, ['Roberto', 'Juan', 'Andrea']);
};