pragma solidity ^0.4.22;


contract Ballot {
	struct Voter{
		uint weight;
		bool voted;
		address delegate;
		uint vote;
	}

	struct Proposal {
		bytes32 name;
		uint voteCount;
	}

	address public chairperson;

	mapping(address => Voter) public voters;

	Proposal[] public proposals;

	constructor(bytes32[] proposalNames) public {
		chairperson = msg.sender;
		voters[chairperson].weight = 1;
		for (unit i = 0; i < proposalNames.length; i++) {
			proposals.push(Proposal({
				name:proposalNames[i],
				voteCount:0
			}));
		}
	}
}