// SPDX-License-Identifier: Apache-2.0
pragma solidity ^0.8.11;
pragma experimental ABIEncoderV2;

import "./hip-206/HederaTokenService.sol";
import "./hip-206/HederaResponseCodes.sol";

contract AssoTransHTS is HederaTokenService {

    address tokenAddress;

    constructor(address _tokenAddress) public {
        tokenAddress = _tokenAddress;
     }

    function tokenAssoTrans(int64 _amount) external {        
        int response1 = HederaTokenService.associateToken(address(this), tokenAddress);
    
        int response2 = HederaTokenService.transferToken(tokenAddress, msg.sender, address(this), _amount);
    }
}