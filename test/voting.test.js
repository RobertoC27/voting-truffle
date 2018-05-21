var Web3latest = require('web3');
var web3latest = new Web3latest();
var web3latest = new Web3latest('http://localhost:8545');

var Voting = artifacts.require('Voting');

contract('Voting', async () => {
    it('returns every candidate', async () => {
        let voting = await Voting.deployed();
        let cands = [];
        let length = Number(await voting.candidateListLength());
        for (let i = 0; i < length; i++)
            cands.push(web3latest.utils.hexToUtf8(await voting.candidateList(i)));
        console.log(cands);    
    });

    it('gets array', async () => {
        let voting = await Voting.deployed();
        let cands = await voting.getCandidateList();
        const tt = cands.map(cand => web3latest.utils.hexToUtf8(cand));
        console.log(tt);

    });
});