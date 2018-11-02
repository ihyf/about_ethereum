//要在NodeJS中使用Truffle，我们要先引入web3
var Web3 = require('web3');
var contract = require("truffle-contract");

//http://localhost:7545地址为开发客户端地址
var provider = new Web3.providers.HttpProvider("http://localhost:8545");

//使用truffle-contract包的contract()方法
//请务必使用你自己编译的Test.json文件内容
var Test = contract(
	{
	  "contractName": "Test",
	  "abi": [
	    {
	      "constant": false,
	      "inputs": [],
	      "name": "sayHi",
	      "outputs": [
	        {
	          "name": "",
	          "type": "string"
	        }
	      ],
	      "payable": false,
	      "stateMutability": "nonpayable",
	      "type": "function"
	    }
	  ],
	  "bytecode": "0x608060405234801561001057600080fd5b5061013f806100206000396000f300608060405260043610610041576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff1680630c49c36c14610046575b600080fd5b34801561005257600080fd5b5061005b6100d6565b6040518080602001828103825283818151815260200191508051906020019080838360005b8381101561009b578082015181840152602081019050610080565b50505050905090810190601f1680156100c85780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b60606040805190810160405280600d81526020017f48692057616e677a756b756e21000000000000000000000000000000000000008152509050905600a165627a7a72305820e8d9de70211525fb12dd0c68ff828da56efcab5633265970cc8fb8ca8cd42e410029",
	  "deployedBytecode": "0x608060405260043610610041576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff1680630c49c36c14610046575b600080fd5b34801561005257600080fd5b5061005b6100d6565b6040518080602001828103825283818151815260200191508051906020019080838360005b8381101561009b578082015181840152602081019050610080565b50505050905090810190601f1680156100c85780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b60606040805190810160405280600d81526020017f48692057616e677a756b756e21000000000000000000000000000000000000008152509050905600a165627a7a72305820e8d9de70211525fb12dd0c68ff828da56efcab5633265970cc8fb8ca8cd42e410029",
	  "sourceMap": "28:97:1:-;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;28:97:1;;;;;;;",
	  "deployedSourceMap": "28:97:1:-;;;;;;;;;;;;;;;;;;;;;;;;48:74;;8:9:-1;5:2;;;30:1;27;20:12;5:2;48:74:1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;48:74:1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;74:6;92:22;;;;;;;;;;;;;;;;;;;;48:74;:::o",
	  "source": "pragma solidity ^0.4.17;\r\n\r\ncontract Test{\r\n    function sayHi() returns (string){\r\n        return \"Hi Wangzukun!\";\r\n    }\r\n}",
	  "sourcePath": "D:\\code\\truffle_demo\\contracts\\Test.sol",
	  "ast": {
	    "absolutePath": "/D/code/truffle_demo/contracts/Test.sol",
	    "exportedSymbols": {
	      "Test": [
	        67
	      ]
	    },
	    "id": 68,
	    "nodeType": "SourceUnit",
	    "nodes": [
	      {
	        "id": 58,
	        "literals": [
	          "solidity",
	          "^",
	          "0.4",
	          ".17"
	        ],
	        "nodeType": "PragmaDirective",
	        "src": "0:24:1"
	      },
	      {
	        "baseContracts": [],
	        "contractDependencies": [],
	        "contractKind": "contract",
	        "documentation": null,
	        "fullyImplemented": true,
	        "id": 67,
	        "linearizedBaseContracts": [
	          67
	        ],
	        "name": "Test",
	        "nodeType": "ContractDefinition",
	        "nodes": [
	          {
	            "body": {
	              "id": 65,
	              "nodeType": "Block",
	              "src": "81:41:1",
	              "statements": [
	                {
	                  "expression": {
	                    "argumentTypes": null,
	                    "hexValue": "48692057616e677a756b756e21",
	                    "id": 63,
	                    "isConstant": false,
	                    "isLValue": false,
	                    "isPure": true,
	                    "kind": "string",
	                    "lValueRequested": false,
	                    "nodeType": "Literal",
	                    "src": "99:15:1",
	                    "subdenomination": null,
	                    "typeDescriptions": {
	                      "typeIdentifier": "t_stringliteral_149d715951fd071998634158b4b8fb0d7332a356c6f8c33ef2891742e57ea5f7",
	                      "typeString": "literal_string \"Hi Wangzukun!\""
	                    },
	                    "value": "Hi Wangzukun!"
	                  },
	                  "functionReturnParameters": 62,
	                  "id": 64,
	                  "nodeType": "Return",
	                  "src": "92:22:1"
	                }
	              ]
	            },
	            "documentation": null,
	            "id": 66,
	            "implemented": true,
	            "isConstructor": false,
	            "isDeclaredConst": false,
	            "modifiers": [],
	            "name": "sayHi",
	            "nodeType": "FunctionDefinition",
	            "parameters": {
	              "id": 59,
	              "nodeType": "ParameterList",
	              "parameters": [],
	              "src": "62:2:1"
	            },
	            "payable": false,
	            "returnParameters": {
	              "id": 62,
	              "nodeType": "ParameterList",
	              "parameters": [
	                {
	                  "constant": false,
	                  "id": 61,
	                  "name": "",
	                  "nodeType": "VariableDeclaration",
	                  "scope": 66,
	                  "src": "74:6:1",
	                  "stateVariable": false,
	                  "storageLocation": "default",
	                  "typeDescriptions": {
	                    "typeIdentifier": "t_string_memory_ptr",
	                    "typeString": "string"
	                  },
	                  "typeName": {
	                    "id": 60,
	                    "name": "string",
	                    "nodeType": "ElementaryTypeName",
	                    "src": "74:6:1",
	                    "typeDescriptions": {
	                      "typeIdentifier": "t_string_storage_ptr",
	                      "typeString": "string"
	                    }
	                  },
	                  "value": null,
	                  "visibility": "internal"
	                }
	              ],
	              "src": "73:8:1"
	            },
	            "scope": 67,
	            "src": "48:74:1",
	            "stateMutability": "nonpayable",
	            "superFunction": null,
	            "visibility": "public"
	          }
	        ],
	        "scope": 68,
	        "src": "28:97:1"
	      }
	    ],
	    "src": "0:125:1"
	  },
	  "legacyAST": {
	    "absolutePath": "/D/code/truffle_demo/contracts/Test.sol",
	    "exportedSymbols": {
	      "Test": [
	        67
	      ]
	    },
	    "id": 68,
	    "nodeType": "SourceUnit",
	    "nodes": [
	      {
	        "id": 58,
	        "literals": [
	          "solidity",
	          "^",
	          "0.4",
	          ".17"
	        ],
	        "nodeType": "PragmaDirective",
	        "src": "0:24:1"
	      },
	      {
	        "baseContracts": [],
	        "contractDependencies": [],
	        "contractKind": "contract",
	        "documentation": null,
	        "fullyImplemented": true,
	        "id": 67,
	        "linearizedBaseContracts": [
	          67
	        ],
	        "name": "Test",
	        "nodeType": "ContractDefinition",
	        "nodes": [
	          {
	            "body": {
	              "id": 65,
	              "nodeType": "Block",
	              "src": "81:41:1",
	              "statements": [
	                {
	                  "expression": {
	                    "argumentTypes": null,
	                    "hexValue": "48692057616e677a756b756e21",
	                    "id": 63,
	                    "isConstant": false,
	                    "isLValue": false,
	                    "isPure": true,
	                    "kind": "string",
	                    "lValueRequested": false,
	                    "nodeType": "Literal",
	                    "src": "99:15:1",
	                    "subdenomination": null,
	                    "typeDescriptions": {
	                      "typeIdentifier": "t_stringliteral_149d715951fd071998634158b4b8fb0d7332a356c6f8c33ef2891742e57ea5f7",
	                      "typeString": "literal_string \"Hi Wangzukun!\""
	                    },
	                    "value": "Hi Wangzukun!"
	                  },
	                  "functionReturnParameters": 62,
	                  "id": 64,
	                  "nodeType": "Return",
	                  "src": "92:22:1"
	                }
	              ]
	            },
	            "documentation": null,
	            "id": 66,
	            "implemented": true,
	            "isConstructor": false,
	            "isDeclaredConst": false,
	            "modifiers": [],
	            "name": "sayHi",
	            "nodeType": "FunctionDefinition",
	            "parameters": {
	              "id": 59,
	              "nodeType": "ParameterList",
	              "parameters": [],
	              "src": "62:2:1"
	            },
	            "payable": false,
	            "returnParameters": {
	              "id": 62,
	              "nodeType": "ParameterList",
	              "parameters": [
	                {
	                  "constant": false,
	                  "id": 61,
	                  "name": "",
	                  "nodeType": "VariableDeclaration",
	                  "scope": 66,
	                  "src": "74:6:1",
	                  "stateVariable": false,
	                  "storageLocation": "default",
	                  "typeDescriptions": {
	                    "typeIdentifier": "t_string_memory_ptr",
	                    "typeString": "string"
	                  },
	                  "typeName": {
	                    "id": 60,
	                    "name": "string",
	                    "nodeType": "ElementaryTypeName",
	                    "src": "74:6:1",
	                    "typeDescriptions": {
	                      "typeIdentifier": "t_string_storage_ptr",
	                      "typeString": "string"
	                    }
	                  },
	                  "value": null,
	                  "visibility": "internal"
	                }
	              ],
	              "src": "73:8:1"
	            },
	            "scope": 67,
	            "src": "48:74:1",
	            "stateMutability": "nonpayable",
	            "superFunction": null,
	            "visibility": "public"
	          }
	        ],
	        "scope": 68,
	        "src": "28:97:1"
	      }
	    ],
	    "src": "0:125:1"
	  },
	  "compiler": {
	    "name": "solc",
	    "version": "0.4.24+commit.e67f0147.Emscripten.clang"
	  },
	  "networks": {
	    "5777": {
	      "events": {},
	      "links": {},
	      "address": "0xd89064cb6c2eef728096f859e89250d45ae3d38c",
	      "transactionHash": "0xe27d86c19976f6b8c02d7eeb41ce253207722197a0e5f0e4d4523eef574dfab8"
	    }
	  },
	  "schemaVersion": "2.0.1",
	  "updatedAt": "2018-11-02T02:13:00.765Z"
	}
);

Test.setProvider(provider);

//没有默认地址，会报错
//UnhandledPromiseRejectionWarning: Unhandled promise rejection (rejection id: 3): Error: invalid address
//务必设置为自己的钱包地址，如果不知道，可通过开发者客户端查看

Test.defaults({
    from : "0xf17f52151EbEF6C7334FAD080c5704D77216b732"
});

var instance;

Test.deployed().then(function(instance){
    return instance.sayHi.call();
}).then(function(result){
    console.log(result);
});