#coding:utf-8
import web3
import requests
from web3 import Web3, HTTPProvider, TestRPCProvider
import pprint

w3 = web3.Web3()
pp = pprint.PrettyPrinter(indent=2)
session = requests.session()
URL = 'http://localhost:7545' # url of my geth node
requestId = 444
myAddress = "0xa87a2946e0C7c92bB5C9e613A9599EDa2e4d6dDe"
myPrivateKey = "0x0c61bfa019977370bd56956daa3115440d3acac925c892c0ab95c6fcdac85cae"

def use_1():
	session = requests.session()
	params = []
	method = "net_version"
	payload = {
		"jsonrpc":"2.0",
			"method":method,
			"params":params,
			"id":1	
		}	
	headers = {
			'Content-type': 'application/json'
		}
	response = session.post("http://localhost:7545", json=payload,headers=headers)
	print("response is {}".format(response.json()))

def use_2():
	myAccount = w3.eth.account.create("put some extra entropy here")
	myPrivateKey = myAccount.privateKey
	print('my address is     : {}'.format(myAccount.address))
	print('my private key is : {}'.format(myAccount.privateKey.hex()))

def createJSONRPCRequestObject(_method, _params, _requestId):
    return {"jsonrpc":"2.0",
            "method":_method,
            "params":_params, # must be an array [value1, value2, ..., valueN]
            "id":_requestId}, _requestId+1

def postJSONRPCRequestObject(_HTTPEnpoint, _jsonRPCRequestObject):
    response = session.post(_HTTPEnpoint,
                            json=_jsonRPCRequestObject,
                            headers={'Content-type': 'application/json'})
    return response.json()
	
def get_you_nonce(requestId):
	### get your nonce\
	requestObject, requestId = createJSONRPCRequestObject('eth_getTransactionCount', [myAddress, 'latest'], requestId)
	responseObject = postJSONRPCRequestObject(URL, requestObject)
	myNonce = w3.toInt(hexstr=responseObject['result'])
	print('nonce of address {} is {}'.format(myAddress, myNonce))

def get_eth_gasPrice():
	requestId = 83
	method = "eth_blockNumber"
	requestObject, requestId = createJSONRPCRequestObject(method, [], requestId)
	responseObject = postJSONRPCRequestObject(URL, requestObject)
	print("gasPrice is {}".format(responseObject['result']))

if __name__ == '__main__':
	get_eth_gasPrice()